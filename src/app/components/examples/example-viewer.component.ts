// components/examples/example-viewer.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CodeHighlightService } from '../../services/code-highlight.service';


@Component({
  selector: 'app-example-viewer',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss']
})
export class ExampleViewerComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() code: string = '';
  @Input() demo: string = '';

  constructor(private codeHighlight: CodeHighlightService) { }

  ngAfterViewInit() {
    this.codeHighlight.highlightAll();
  }
}