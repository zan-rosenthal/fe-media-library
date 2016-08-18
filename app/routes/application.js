import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      artists: this.store.findAll('artist')
    });
  }
});
