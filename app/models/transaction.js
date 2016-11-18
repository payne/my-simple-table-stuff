import DS from 'ember-data';

export default DS.Model.extend({
  vendor: DS.attr('string'),
  amount: DS.attr('number', {defaultValue: 0.0})
});
