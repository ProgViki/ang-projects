// components/features/features.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
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
    },
    {
      icon: 'verified',
      title: 'Enterprise Ready',
      description: 'Used by Google and trusted by enterprises worldwide.'
    },
    {
      icon: 'extension',
      title: 'Extensible',
      description: 'Rich ecosystem with extensive third-party library support.'
    },
    {
      icon: 'groups',
      title: 'Community',
      description: 'Backed by a vibrant community of millions of developers.'
    }
  ];
}