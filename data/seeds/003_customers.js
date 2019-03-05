exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([{
          customerId: 1,
          customer_name: 'Betty Boop-1',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990001',
          customer_companies: JSON.stringify([4])
        },
        {
          customerId: 2,
          customer_name: 'Betty Boop-2',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990002',
          customer_companies: JSON.stringify([3])
        },
        {
          customerId: 3,
          customer_name: 'Betty Boop-3',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990003',
          customer_companies: JSON.stringify([1,2])
        },
        {
          customerId: 4,
          customer_name: 'Betty Boop-4',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990004',
          customer_companies: JSON.stringify([5,6])
        },
        {
          customerId: 5,
          customer_name: 'Betty Boop-5',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990005',
          customer_companies: JSON.stringify([1])
        },
        {
          customerId: 6,
          customer_name: 'Betty Boop-6',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990006',
          customer_companies: JSON.stringify([6])
        },
        {
          customerId: 7,
          customer_name: 'Betty Boop-7',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990007',
          customer_companies: JSON.stringify([2,4])
        },
        {
          customerId: 8,
          customer_name: 'Betty Boop-8',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990008',
          customer_companies: JSON.stringify([3])
        },
        {
          customerId: 9,
          customer_name: 'Betty Boop-9',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990009',
          customer_companies: JSON.stringify([4,5,6,1])
        },
        {
          customerId: 10,
          customer_name: 'Betty Boop-10',
          customer_address: '789 MLK street',
          customer_email: 'betty.boop@gmail.com',
          customer_phone_num: '0009990001',
          customer_companies: JSON.stringify([2,3])
        },
      ]);
    });
};