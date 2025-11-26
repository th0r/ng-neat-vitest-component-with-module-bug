import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NestedChild} from './nested-child';

@NgModule({
  imports: [CommonModule],
  declarations: [NestedChild],
  exports: [NestedChild]
})
export class NestedChildModule {}
