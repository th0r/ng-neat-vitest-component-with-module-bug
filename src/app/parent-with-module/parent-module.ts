import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParentWithModule} from './parent-with-module';
import {ChildModule} from '../child-with-module/child-module';
import {ChildStandalone} from '../child-standalone/child-standalone';

@NgModule({
  imports: [CommonModule, ChildModule, ChildStandalone],
  declarations: [ParentWithModule],
  exports: [ParentWithModule]
})
export class ParentModule {}
