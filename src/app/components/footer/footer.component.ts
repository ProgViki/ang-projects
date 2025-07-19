// components/footer/footer.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  links = [
    { name: 'GitHub', icon: 'code', url: 'https://github.com/angular/angular' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/angular' },
    { name: 'Blog', icon: 'rss_feed', url: 'https://blog.angular.io/' }
  ];
}