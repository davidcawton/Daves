import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('coffee');
  this.route('social');
  this.route('work', function() {
    this.route('development');
  });
});

export default Router;
