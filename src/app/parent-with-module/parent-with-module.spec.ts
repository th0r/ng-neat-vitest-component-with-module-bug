import {ParentWithModule} from './parent-with-module';
import {
  Spectator,
  createComponentFactory
} from '@ngneat/spectator/vitest';

import {ParentModule} from './parent-module';

describe('ParentWithModule component', () => {
  let spectator: Spectator<ParentWithModule>;

  const createComponent = createComponentFactory({
    component: ParentWithModule,
    imports: [ParentModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('renders', () => {
    expect(spectator.element).toHaveText('ParentWithModule');
  });

  it('contains a properly rendered "child-with-module" component', () => {
    expect(spectator.element).toHaveDescendantWithText({selector: 'app-child-with-module > p', text: 'child-with-module works!'});
    expect(spectator.element).toHaveDescendantWithText({selector: 'app-child-with-module > app-nested-child', text: 'nested-child works!'});
  });

  it('contains a properly rendered "child-standalone" component', () => {
    expect(spectator.element).toHaveDescendantWithText({selector: 'app-child-standalone > p', text: 'child-standalone works!'});
    expect(spectator.element).toHaveDescendantWithText({selector: 'app-child-standalone > app-nested-child', text: 'nested-child works!'});
  });
});
