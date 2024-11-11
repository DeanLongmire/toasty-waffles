import { module, test } from 'qunit';

import { setupTest } from 'toasty-waffles/tests/helpers';

module('Unit | Model | year', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('year', {});
    assert.ok(model);
  });
});
