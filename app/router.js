import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('about');
  this.route('characteristics');
  this.route('users');
  this.route('measurements');
  this.route('compare');

  this.route('species', function() {
    this.route('new');
    this.route('show', { path: ':species_id' });
  });
  this.route('strains', function() {
    this.route('new');
    this.route('show', { path: ':strain_id' });
  });
});

export default Router;
