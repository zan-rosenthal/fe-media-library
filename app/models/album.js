import DS from 'ember-data';

const { attr, belongsTo, hasMany, Model} = DS;

export default Model.extend({
  name: attr('string'),
  year: attr('numer'),
  totalSold: attr('number'),
  artist: belongsTo('aritst', {async: true}),
  comments: hasMany('comment', {async: true})
});
