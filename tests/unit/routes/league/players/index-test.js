import { module, test } from 'qunit';
import { setupTest } from 'toasty-waffles/tests/helpers';

module('Unit | Route | league/players/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:league/players/index');
    assert.ok(route);
  });
});
