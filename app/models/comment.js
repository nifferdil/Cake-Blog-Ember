import DS from 'ember-data';

export default DS.Model.extend({
   username: DS.attr("string"),
   comment: DS.attr("string"),
   cake: DS.belongsTo('cake',{async: true})
});
