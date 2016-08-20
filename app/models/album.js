import DS from 'ember-data';

const { attr, belongsTo, hasMany, Model} = DS;

export default Model.extend({
  name: attr('string'),
  totalSold: attr('number'),
  comments: hasMany('comment', {async: true}),
  artist: belongsTo('artist', {async: true})
});
