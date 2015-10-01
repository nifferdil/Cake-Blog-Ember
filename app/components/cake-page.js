import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    updateCake(cake, params) {
      this.sendAction('updateCake', cake, params);
    }
  }
});
