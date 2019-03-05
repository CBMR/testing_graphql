
exports.up = function(knex, Promise) {
  return knex.schema.table('invoices', table => {
    table.renameColumn('total cost', 'total_cost')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('invoices', table => {
    table.renameColumn('total_cost', 'total cost')
  })
};
