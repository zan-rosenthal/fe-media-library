import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('as-scrollable', 'Integration | Component | as scrollable', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{as-scrollable}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#as-scrollable}}
      template block text
    {{/as-scrollable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
