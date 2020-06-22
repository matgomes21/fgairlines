const knex = require('knex');

exports.up = function(knex) {
  return knex.schema.createTable('airlines', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('airlines');
};
