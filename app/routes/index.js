import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('cake');
  },

  actions: {
    save3(params) {
      var newCake = this.store.createRecord('cake', params);
      newCake.save();
      this.transitionTo('index');
    },

    destroyCake(cake) {
      cake.destroyRecord();
      this.transitionTo('index');
    }
  }
});
