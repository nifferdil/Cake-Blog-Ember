import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var input = {
        username: this.get('username'),
        comment: this.get('comment'),
        cake: this.cake
      };
      this.set('addNewComment', false),
      this.sendAction('saveComment', input);
    }
  }
});
