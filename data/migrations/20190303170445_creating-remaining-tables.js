
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('users', table => {
      table.increments('userId')
      table.string('user_name').notNullable()
      table.string('user_email').notNullable()
      table.integer('user_phone_num')
  
      table.timestamp('created_ts').notNullable()
      table.timestamp('updated_ts').notNullable()
  
      table.json('user_companies').notNullable()
      table.boolean('active')
    }),

    knex.schema.createTable('customers', table => {
      table.increments('customerId')
      table.string('customer_name').notNullable()
      table.string('customer_address').notNullable()
      table.string('customer_email').notNullable()
      table.integer('customer_phone_num').notNullable()
  
      table.json('customer_companies').notNullable()
    }),

    knex.schema.createTable('invoices', table => {
      table.increments('invoiceId')
      table.integer('invoice_num').notNullable()
      table.integer('service_provider_id').notNullable()
  
      table.timestamp('invoice_created_ts').notNullable()
      table.timestamp('invoice_updated_ts').notNullable()
      table.timestamp('invoice_due_date').notNullable()
      
      table.integer('company_id').unsigned().notNullable()
      table.foreign('company_id').references('companyId').on('companies')
  
      table.integer('customer_id').unsigned().notNullable()
      table.foreign('customer_id').references('customerId').on('customers')

      table.json('services_rendered').notNullable()
      table.integer('total cost').notNullable()
      table.boolean('paid')
      
      table.boolean('archived')
    }),
  ]);
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('customers'),
    knex.schema.dropTableIfExists('invoices'),
  ])
};
