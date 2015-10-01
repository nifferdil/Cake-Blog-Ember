import Ember from 'ember';

export default Ember.Component.extend({
  updateCakeForm: false,
  actions: {
    updateCakeForm() {
      this.set('updateCakeForm', true);
    },

    update(cake) {
      var params = {
        name: this.get('name'),
        flavor: this.get('flavor'),
        frosting: this.get('frosting'),
        image: this.get('image'),
      };

      this.set('updateCakeForm', false);
      this.sendAction('updateCake', cake, params);
    }
  }
});
