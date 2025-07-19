// pages/community/community.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {
  events = [
    {
      name: 'Angular Connect',
      date: 'October 15-16, 2023',
      location: 'London, UK',
      description: 'The largest Angular conference in Europe'
    },
    {
      name: 'ng-conf',
      date: 'April 18-20, 2023',
      location: 'Salt Lake City, USA',
      description: 'The original Angular conference'
    }
  ];

  forums = [
    {
      name: 'Stack Overflow',
      icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico',
      description: 'Get answers to your Angular questions',
      link: 'https://stackoverflow.com/questions/tagged/angular'
    },
    {
      name: 'Angular Discord',
      icon: 'https://discord.com/assets/favicon.ico',
      description: 'Chat with Angular developers in real-time',
      link: 'https://discord.gg/angular'
    }
  ];
}