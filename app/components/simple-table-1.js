import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  csvText: `HyVee, 13.33\nAmazon, 29.29`,
  rows: [
    {vendor: 'Matt Payne', amount: 100.0},
    {vendor: 'Pascal Payne', amount: 200.0}
  ],
  actions: {
    processCsv(csv) {
      console.log(`let's process!  And listen to David Bowie`);
      console.log(csv);
      console.log(this.get('parentView.targetObject.store')); //undefined
      // this.store fails :-(
      // this.store.createRecord('transaction',{vendor: 'hack',
      // amount: 14.14}).save();
      //WRONG: rows.pushObject( {vendor: 'Fun town', amount: 72.72});
    }
  }
});
