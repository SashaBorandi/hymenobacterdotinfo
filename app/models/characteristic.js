import DS from 'ember-data';

export default DS.Model.extend({
  characteristicName: DS.attr('string'),
  characteristicType: DS.belongsTo('characteristicType', { async: true }),
  strains           : DS.hasMany('strain', { async: true }),
  measurements      : DS.hasMany('measurements', { async: true }),
  createdAt         : DS.attr('date'),
  updatedAt         : DS.attr('date'),
  deletedAt         : DS.attr('date'),
  createdBy         : DS.attr('number'),
  updatedBy         : DS.attr('number'),
  deletedBy         : DS.attr('number'),
  sortOrder         : DS.attr('number'),
});
