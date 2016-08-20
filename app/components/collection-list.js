import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collection', 'scroll-list'],
  sortBy: 'totalSold',
  sortOrder: 'desc',
  sortedCollection: Ember.computed.sort('model', 'sortDefinition'),
  sortDefinition: Ember.computed('sortBy', function(){
    return [`${this.get('sortBy')}:${this.get('sortOrder')}`];
  })
});
