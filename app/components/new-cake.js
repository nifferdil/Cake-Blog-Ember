import Ember from 'ember';

export default Ember.Component.extend({
  addNewCake: false,
  actions: {
    cakeFormShow() {
      this.set('addNewCake', true);
    },

    save1() {
      var params = {
        name: this.get('name'),
        flavor: this.get('flavor'),
        frosting: this.get('frosting'),
        image: this.get('image'),
      };
      this.set('addNewCake', false),
      this.sendAction('save2', params);
    }
  }
});
