import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.query('artist', {based_in: params.location})
  }

});
