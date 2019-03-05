
exports.up = function(knex, Promise) {
  return knex.schema.table('companies', table => {
    table.json('company_users')
    table.json('company_admins')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('companies', table => {
    table.dropColumn('company_users')
    table.dropColumn('company_admins')
  })
};
