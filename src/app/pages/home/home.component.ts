// pages/home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
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