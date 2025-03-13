import { module, test } from 'qunit';
import { setupTest } from 'toasty-waffles/tests/helpers';

module('Unit | Route | teams/team', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:teams/team');
    assert.ok(route);
  });
});
