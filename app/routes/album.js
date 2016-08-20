import Ember from 'ember';

export default Ember.Route.extend({

    model(params){
      return  this.store.query('album', {
        page: params.page,
        per_page: 10,
        page: 1, 
        id: album_id
      });
    },

});
