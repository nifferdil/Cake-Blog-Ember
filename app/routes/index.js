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

    update(cake, params) {
     Object.keys(params).forEach(function(key){
       if(params[key]!==undefined) {
         cake.set(key,params[key]);
       }
     });
     cake.save();
     this.transitionTo('index');
   },

    destroyCake(cake) {
      cake.destroyRecord();
      this.transitionTo('index');
    }
  }
});
