import DS from 'ember-data';

const { attr, belongsTo, Model} = DS;

export default Model.extend({
  author: attr('string'),
  message: attr('string'),
  updatedAt: attr('date'),
  album: belongsTo('album', {async:true})
});
