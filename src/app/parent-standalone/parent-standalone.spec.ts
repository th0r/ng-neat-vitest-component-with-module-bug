import {
  Spectator,
  createComponentFactory
} from '@ngneat/spectator/vitest';

import {ParentStandalone} from './parent-standalone';

describe('ParentStandalone component', () => {
  let spectator: Spectator<ParentStandalone>;

  const createComponent = createComponentFactory({
    component: ParentStandalone
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('renders', () => {
    expect(spectator.element).toHaveText('ParentStandalone');
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
