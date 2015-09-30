import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  name: DS.attr(),
  flavor: DS.attr(),
  frosting: DS.attr(),
  image: DS.attr()
});
