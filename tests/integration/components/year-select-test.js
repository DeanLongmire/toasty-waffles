import { module, test } from 'qunit';
import { setupRenderingTest } from 'toasty-waffles/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | year-select', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<YearSelect />`);

    assert.dom(this.element).exists();
  });
});
