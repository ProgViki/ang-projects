// components/getting-started/getting-started.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {
  steps = [
    {
      title: 'Install Angular CLI',
      code: 'npm install -g @angular/cli',
      description: 'The Angular CLI is the fastest way to get started with Angular.'
    },
    {
      title: 'Create a new project',
      code: 'ng new my-app',
      description: 'This will create a new Angular application with all the necessary files.'
    },
    {
      title: 'Serve the application',
      code: 'cd my-app\nng serve',
      description: 'This will start a development server on http://localhost:4200/'
    }
  ];
}