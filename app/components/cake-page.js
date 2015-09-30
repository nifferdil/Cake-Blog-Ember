import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    update(cake, params) {
      this.sendAction('update', cake, params);
    },

    delete(cake) {
      if (confirm('Are you sure you want to delete this cake?')) {
        this.sendAction('destroyCake', cake);
      }
    }
  }
});
