import { module, test } from 'qunit';
import { setupRenderingTest } from 'toasty-waffles/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tw-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<TwHeader />`);

    assert.dom(this.element).exists();
  });
});
