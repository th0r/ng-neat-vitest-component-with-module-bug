import { Component } from '@angular/core';

@Component({
  selector: 'app-child-with-module',
  standalone: false,
  template: `
    <p>child-with-module works!</p>
    <app-nested-child/>
  `
})
export class ChildWithModule {}
