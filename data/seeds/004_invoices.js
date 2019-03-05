exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('invoices').del()
    .then(function () {
      // Inserts seed entries
      return knex('invoices').insert([{
          invoiceId: 1,
          invoice_num: 5681,
          service_provider_id: 4,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 6,
          customer_id: 10,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 2,
          invoice_num: 9473,
          service_provider_id: 10,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 5,
          customer_id: 4,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 3,
          invoice_num: 8436,
          service_provider_id: 2,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 6,
          customer_id: 9,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 4,
          invoice_num: 0981,
          service_provider_id: 1,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 1,
          customer_id: 1,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 5,
          invoice_num: 2778,
          service_provider_id: 9,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 2,
          customer_id: 17,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 6,
          invoice_num: 4436,
          service_provider_id: 10,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 1,
          customer_id: 16,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 7,
          invoice_num: 2811,
          service_provider_id: 6,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 6,
          customer_id: 7,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 8,
          invoice_num: 3361,
          service_provider_id: 4,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 1,
          customer_id: 9,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 9,
          invoice_num: 6452,
          service_provider_id: 9,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 3,
          customer_id: 15,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
        {
          invoiceId: 10,
          invoice_num: 2435,
          service_provider_id: 8,
          invoice_created_ts: '2019-02-22 06:41:08 pm',
          invoice_updated_ts: '2019-02-22 06:41:08 pm',
          invoice_due_date: '2019-02-22 06:45:08 pm',
          company_id: 6,
          customer_id: 11,
          services_rendered: JSON.stringify([{
            service: "cost"
          }, {
            service: "cost"
          }, {
            service: "cost"
          }]),
          total_cost: 100,
          paid: false,
          archived: false
        },
      ]);
    });
};