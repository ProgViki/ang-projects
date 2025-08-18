import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, DecorationPackage } from './models';
import { map, of, catchError } from 'rxjs';

const USE_LIVE_API = true; // toggle if needed

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  /** FOOD: TheMealDB (free) */
  getMeals() {
    if (!USE_LIVE_API) return of(mockFood);
    return this.http.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .pipe(
        map(res => (res.meals ?? []).slice(0, 12).map((m: any) => ({
          id: 'meal-' + m.idMeal,
          title: m.strMeal,
          description: m.strInstructions?.slice(0, 180) + '...',
          price: this.randomPrice(8, 20),
          image: m.strMealThumb,
          category: 'food' as const,
          tags: [m.strCategory, m.strArea].filter(Boolean)
        } as Product))),
        catchError(() => of(mockFood))
      );
  }

  /** CAKES/SNACKS: Dummy data (you can swap in DummyJSON if you want) */
  getCakes()  { return of(mockCakes); }
  getSnacks() { return of(mockSnacks); }

  /** DECORATION PACKAGES: mock */
  getDecorationPackages() { return of(mockDecorations); }

  private randomPrice(min: number, max: number) {
    return Math.round((Math.random() * (max - min) + min) * 100) / 100;
  }
}

/* ---------- MOCK DATA ---------- */
const mockFood: Product[] = [
  { id:'f1', title:'Jollof Rice & Chicken', description:'Classic party jollof with grilled chicken', price:14.5, image:'https://images.unsplash.com/photo-1604908177070-5b4c1b1f72b5?q=80&w=800', category:'food', tags:['party','rice'] },
  { id:'f2', title:'Pepper Soup (Goat)', description:'Spicy comfort soup with fresh herbs', price:11.0, image:'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800', category:'food', tags:['soup'] },
];

const mockCakes: Product[] = [
  { id:'c1', title:'Red Velvet Cake', description:'Moist and rich with cream cheese frosting', price:32, image:'https://images.unsplash.com/photo-1606313564200-e75b6a63f935?q=80&w=800', category:'cake', tags:['birthday'] },
  { id:'c2', title:'Chocolate Fudge Cake', description:'Decadent dark chocolate layers', price:35, image:'https://images.unsplash.com/photo-1542826438-0296d526d0dd?q=80&w=800', category:'cake', tags:['wedding','celebration'] },
];

const mockSnacks: Product[] = [
  { id:'s1', title:'Chicken Pie', description:'Flaky crust with savory filling', price:3.5, image:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800', category:'snack' },
  { id:'s2', title:'Puff-Puff Box (12)', description:'Golden, fluffy goodness', price:6.0, image:'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800', category:'snack' },
];

const mockDecorations: DecorationPackage[] = [
  { id:'d1', title:'Elegant Emerald', description:'Emerald & gold accents for receptions', price:450, image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200', includes:['Table florals','Backdrop','Lighting','Charger plates'] },
  { id:'d2', title:'Midnight Luxe', description:'Midnight blue base with burnt orange pops', price:620, image:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200', includes:['Stage decor','Ceiling drapes','Uplights','Photo corner'] },
];
