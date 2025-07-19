// components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
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