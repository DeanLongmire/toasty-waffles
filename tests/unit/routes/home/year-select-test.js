import { module, test } from 'qunit';
import { setupTest } from 'toasty-waffles/tests/helpers';

module('Unit | Route | home/year-select', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:home/year-select');
    assert.ok(route);
  });
});