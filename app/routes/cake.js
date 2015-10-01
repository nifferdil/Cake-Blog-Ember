import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('cake', params.cake_id);
  },
  actions: {
  updateCake(cake, params) {
     Object.keys(params).forEach(function(key){
       if(params[key]!==undefined) {
         cake.set(key,params[key]);
       }
     });
     cake.save();
   },

   delete(cake) {
     if (confirm('Are you sure you want to delete this cake?')) {
       cake.destroyRecord();
       this.transitionTo('index');
     }
   },

   saveComment(params) {
     debugger;
     var newComment = this.store.createRecord('comment', params);
     newComment.save();
   }
  }
});
