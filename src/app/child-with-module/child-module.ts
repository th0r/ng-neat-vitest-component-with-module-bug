import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChildWithModule} from './child-with-module';
import {NestedChildModule} from '../nested-child/nested-child-module';

@NgModule({
  declarations: [ChildWithModule],
  imports: [CommonModule, NestedChildModule],
  exports: [ChildWithModule]
})
export class ChildModule {}
