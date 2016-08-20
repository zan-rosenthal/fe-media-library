import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('artist', {path: '/artists/:artist_id'});
  this.route('album', {path: '/albums/:album_id'});

});

export default Router;
