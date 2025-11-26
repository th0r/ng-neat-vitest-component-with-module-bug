import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-with-module',
  template: `
    ParentWithModule
    <app-child-with-module/>
    <app-child-standalone/>
  `,
  standalone: false
})
export class ParentWithModule {}
