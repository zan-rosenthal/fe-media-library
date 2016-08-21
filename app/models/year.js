import DS from 'ember-data';

export default DS.Model.extend({
  model(params){
      return this.store.query('album', { year: params.year });
  },
});
