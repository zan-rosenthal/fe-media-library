import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collection', 'scroll-list'],
  sortedReviews: Ember.computed.sort('artist', 'sortDefinition'),
  sortDefinition: ['totalAlbumsSold:desc'],
});
