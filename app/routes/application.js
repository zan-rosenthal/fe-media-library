import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
  //   params = params || {
  //     pag: 1,
  //     per_page
  //   }
  //   return  this.store.query('artist', {
  //     page: params.page,
  //     per_page: 10
  //   });
  // },
  //
  // queryParams: {
  //   page:{
  //     refreshModel: true
  //   }
  return this.store.findAll('artist')
  }

});
