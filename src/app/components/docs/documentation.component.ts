// pages/documentation/documentation.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  currentDoc: string = '';
  docSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        { id: 'installation', title: 'Installation' },
        { id: 'setup', title: 'Project Setup' },
        { id: 'first-app', title: 'First Application' }
      ]
    },
    {
      id: 'components',
      title: 'Components',
      items: [
        { id: 'component-basics', title: 'Component Basics' },
        { id: 'lifecycle', title: 'Lifecycle Hooks' },
        { id: 'component-interaction', title: 'Component Interaction' }
      ]
    },
    {
      id: 'templates',
      title: 'Templates',
      items: [
        { id: 'syntax', title: 'Template Syntax' },
        { id: 'directives', title: 'Directives' },
        { id: 'pipes', title: 'Pipes' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.currentDoc = params.get('id') || 'getting-started';
    });
  }

  onSectionChange(sectionId: string) {
    this.currentDoc = sectionId;
  }
}