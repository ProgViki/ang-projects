// pages/home/home.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    {
      icon: 'speed',
      title: 'High Performance',
      description: 'Angular is designed for speed. It uses incremental DOM for efficient updates.'
    },
    {
      icon: 'devices',
      title: 'Cross Platform',
      description: 'Build for web, mobile web, native mobile and native desktop.'
    },
    {
      icon: 'code',
      title: 'Full Stack',
      description: 'Angular provides everything you need from routing to forms to HTTP clients.'
    }
  ];

  quickStartCode = `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Welcome to {{title}}!</h1>'
})
export class AppComponent {
  title = 'My Angular App';
}`;
}