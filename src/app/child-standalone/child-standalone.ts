import { Component } from '@angular/core';
import {NestedChildModule} from '../nested-child/nested-child-module';

@Component({
  selector: 'app-child-standalone',
  template: `
    <p>child-standalone works!</p>
    <app-nested-child/>
  `,
  imports: [
    NestedChildModule
  ]
})
export class ChildStandalone {}
