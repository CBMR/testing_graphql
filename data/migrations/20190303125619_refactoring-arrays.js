
exports.up = function(knex, Promise) {
  return knex.schema.table('companies', table => {
    table.dropColumn('company_users')
    table.dropColumn('company_admins')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('companies', table => {
    table.enu('company_users', []).notNullable()
    table.enu('company_admins', []).notNullable()
  })
};
