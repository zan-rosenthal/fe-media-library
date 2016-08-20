import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['artist_page', 'per_page'],
  artist_page: 1,
  per_page: 5
});
