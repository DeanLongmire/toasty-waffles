import { module, test } from 'qunit';

import { setupTest } from 'toasty-waffles/tests/helpers';

module('Unit | Adapter | player', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:player');
    assert.ok(adapter);
  });
});
