import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany, Model} = DS;
const { computed } = Ember;

export default Model.extend({
  name: attr('string'),
  based_in: attr('string'),
  foundingYear: attr('number'),
  updatedAt: attr('date'),
  albums: hasMany('album', {async: true}),
  totalByAlbum: computed.mapBy('albums', 'totalSold'),
  totalSold: computed.sum('totalByAlbum'),
  componentName: 'artist-detail'
});
