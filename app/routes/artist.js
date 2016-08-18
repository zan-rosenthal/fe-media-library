import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      album: this.store.findRecord('artist', params.album_id)
    }) ;
  }
});
