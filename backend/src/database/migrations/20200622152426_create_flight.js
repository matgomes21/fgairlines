
exports.up = function(knex) {
  return knex.schema.createTable('flights', function(table){
    table.increments();
    table.string('destiny').notNullable();
    table.string('data').notNullable();
    table.string('hour').notNullable();
    table.decimal('value').notNullable();

    table.string('airline_id').notNullable();

    table.foreign('airline_id').references('id').inTable('airlines');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('flights');
};
