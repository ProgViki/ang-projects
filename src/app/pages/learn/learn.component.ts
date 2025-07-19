// pages/learn/learn.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent {
  learningPaths = [
    {
      title: 'Beginner',
      items: [
        'Components',
        'Templates',
        'Directives',
        'Dependency Injection'
      ],
      color: 'primary'
    },
    {
      title: 'Intermediate',
      items: [
        'Routing',
        'Forms',
        'HTTP Client',
        'State Management'
      ],
      color: 'accent'
    },
    {
      title: 'Advanced',
      items: [
        'Custom Directives',
        'Dynamic Components',
        'AOT Compilation',
        'Performance Optimization'
      ],
      color: 'warn'
    }
  ];

  resources = [
    {
      title: 'Official Documentation',
      description: 'Comprehensive guides and API references',
      link: 'https://angular.io/docs',
      icon: 'menu_book'
    },
    {
      title: 'Angular University',
      description: 'Video courses and tutorials',
      link: 'https://angular-university.io',
      icon: 'school'
    },
    {
      title: 'Angular Blog',
      description: 'Latest news and updates',
      link: 'https://blog.angular.io',
      icon: 'rss_feed'
    }
  ];
}