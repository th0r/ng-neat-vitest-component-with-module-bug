import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {ChildModule} from '../child-with-module/child-module';
import {ChildStandalone} from '../child-standalone/child-standalone';

@Component({
  selector: 'app-parent-standalone',
  imports: [ChildModule, ChildStandalone],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    ParentStandalone
    <app-child-with-module/>
    <app-child-standalone/>
  `
})
export class ParentStandalone {}

