import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  template: `
    <mat-toolbar color="primary" class="header">
      <div class="brand" routerLink="">
        <mat-icon>restaurant</mat-icon>
        <span>GeoCater</span>
      </div>
      <span class="spacer"></span>
      <nav class="nav">
        <a mat-button routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
        <a mat-button routerLink="/catalog" routerLinkActive="active">Menu</a>
        <a mat-button routerLink="/decorations" routerLinkActive="active">Decorations</a>
        <a mat-raised-button color="accent" routerLink="/cart">
          <mat-icon>shopping_cart</mat-icon>
          Cart
        </a>
      </nav>
    </mat-toolbar>
  `,
  styles: [`
    .header { background: var(--midnight); color: var(--text-on-dark); position: sticky; top: 0; z-index: 10; }
    .brand { display: flex; align-items: center; gap: .5rem; cursor: pointer; }
    .spacer { flex: 1; }
    .nav a.active { text-decoration: underline; }
  `]
})
export class HeaderComponent {}
