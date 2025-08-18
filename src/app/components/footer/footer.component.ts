import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div>© {{year}} GeoCater · Catering & Decorations</div>
      <div class="links">
        <a href="#">Terms</a> · <a href="#">Privacy</a> · <a href="#">Contact</a>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 48px;
      padding: 28px 16px;
      color: var(--text-on-dark);
      background: #081423;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
      align-items: center;
    }
    .links a { color: var(--emerald); }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
