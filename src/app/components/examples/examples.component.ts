// components/examples/example-viewer.component.ts
import { Component, Input, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-example-viewer',
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