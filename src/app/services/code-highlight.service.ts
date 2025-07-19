// services/code-highlight.service.ts
import { Injectable } from '@angular/core';
import * as Prism from 'prismjs';

@Injectable({
  providedIn: 'root'
})
export class CodeHighlightService {
  constructor() { }

  highlightAll() {
    Prism.highlightAll();
  }

  highlightElement(element: HTMLElement) {
    Prism.highlightElement(element);
  }
}