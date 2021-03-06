import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('species');
  },
  actions: {
    cancelSpecies: function() {
      this.transitionTo('species.index');
    }
  }
});
