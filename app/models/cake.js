import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  flavor: DS.attr(),
  frosting: DS.attr(),
  image: DS.attr(),
  // comment: DS.attr()
  comments: DS.hasMany('comment', { async: true }),
});
