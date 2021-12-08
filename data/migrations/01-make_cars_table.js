exports.up = function (knex) {
return knex.schema.createTable('cars', table =>{
 
 // creating the new id (it does create it on its own so the 'id' is not needed)
  table.increments()

  // creating the table for the unique vin numbers
  table.string('vin').notNullable().unique()

  // creating a table for the make of the vehicle
  table.string('make').notNullable()

  // creating a table for the model of the vehicle
  table.string('model').notNullable()

  // creating a table for the milage of the vehicle ( use integer for numbers / numberic does not work as the read me says)
  table.integer('mileage').notNullable()

  // creating a table for the title 
  table.string('title')

  // creating a table for the transmission type 
  table.string('transmission')




})
};

exports.down = function (knex) {
return knex.schema.dropTableIfExists('cars')
};
