import DS from 'ember-data';

const { attr, belongsTo, Model} = DS;

export default Model.extend({
  author: attr('string'),
  message: attr('string'),
  updatedAt: attr('data'),
  albums: belongsTo('album', {async:true})
});
