// pages/about/about.component.ts
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatStepperModule,
    TitleCasePipe,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutAngular = {
    description: `Angular is a platform and framework for building single-page client applications using HTML and TypeScript. 
    Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries 
    that you import into your applications.`,
    firstRelease: '2016',
    currentVersion: 'v16',
    maintainer: 'Google'
  };

  teamMembers = [
    {
      name: 'Misko Hevery',
      role: 'Creator of Angular',
      bio: 'Software engineer at Google who created the AngularJS framework.',
      image: 'assets/images/misko.jpg'
    },
    {
      name: 'Igor Minar',
      role: 'Angular Lead',
      bio: 'Engineering lead for the Angular team at Google.',
      image: 'assets/images/igor.jpg'
    }
  ];
}