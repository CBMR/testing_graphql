
exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', table => {
    table.increments('companyId')

    table.string('company_name').notNullable()
    table.integer('company_code')
    table.integer('company_phone_num').notNullable()
    table.string('company_email').notNullable()
    table.string('company_address').notNullable()

    table.enu('company_users', []).notNullable()
    table.enu('company_admins', []).notNullable()

    table.integer('credits').notNullable()
    table.boolean('unlimited_tier')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('companies')
};
