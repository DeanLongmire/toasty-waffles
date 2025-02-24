import { module, test } from 'qunit';

import { setupTest } from 'toasty-waffles/tests/helpers';

module('Unit | Model | division', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('division', {});
    assert.ok(model);
  });
});
