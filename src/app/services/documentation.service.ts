// services/documentation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  private docsBasePath = 'assets/docs';

  constructor(private http: HttpClient) {}

  getDocumentation(slug: string): Observable<string> {
    return this.http.get(`${this.docsBasePath}/${slug}.md`, { responseType: 'text' }).pipe(
      catchError(() => of('# Documentation Not Found\n\nThe requested documentation could not be loaded.'))
    );
  }

  getTableOfContents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.docsBasePath}/toc.json`).pipe(
      catchError(() => of([]))
    );
  }
}