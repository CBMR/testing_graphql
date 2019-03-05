
exports.up = function(knex, Promise) {
  return knex.schema.table('invoices', table => {
    table.dropForeign('company_id')
    table.dropForeign('customer_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('invoices', table => {
    table.foreign('company_id').references('companyId').on('companies')
    table.foreign('customer_id').references('customerId').on('customers')
  })
};
