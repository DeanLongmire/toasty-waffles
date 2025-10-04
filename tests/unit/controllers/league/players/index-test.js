import { module, test } from 'qunit';
import { setupTest } from 'toasty-waffles/tests/helpers';

module('Unit | Controller | league/players/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:league/players/index');
    assert.ok(controller);
  });
});
