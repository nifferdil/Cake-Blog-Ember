import Ember from 'ember';

export default Ember.Component.extend({

  model() {
  return { cakes: this.store.findAll('cake'),
    comments: this.store.findAll('comment') };
},

  // model() {
  //   return Ember.RSVP.hash({
  //     comments: this.store.findAll('comment'),
  //     cakes: this.store.findAll('cake')
  //   });
  // },

  actions: {

    updateCake(cake, params) {
      this.sendAction('updateCake', cake, params);
    }
  }
});
