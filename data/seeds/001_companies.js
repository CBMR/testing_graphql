exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([{
          companyId: 1,
          company_name: 'Apple',
          company_code: 1111,
          company_phone_num: 100 - 000 - 0000,
          company_email: 'apple@gmail.com',
          company_address: '111 main st',
          company_users: JSON.stringify([1, 2, 3]),
          company_admins: JSON.stringify([1, 2]),
          credits: 0,
          unlimited_tier: false
        },
        {
          companyId: 2,
          company_name: 'Google',
          company_code: 2222,
          company_phone_num: 200 - 000 - 0000,
          company_email: 'google@gmail.com',
          company_address: '222 main st',
          company_users: JSON.stringify([4, 5, 6]),
          company_admins: JSON.stringify([5]),
          credits: 5,
          unlimited_tier: false
        },
        {
          companyId: 3,
          company_name: 'Facebook',
          company_code: 3333,
          company_phone_num: 300 - 000 - 0000,
          company_email: 'facebook@gmail.com',
          company_address: '333 main st',
          company_users: JSON.stringify([7, 8]),
          company_admins: JSON.stringify([8]),
          credits: 3,
          unlimited_tier: false
        },
        {
          companyId: 4,
          company_name: 'Twitter',
          company_code: 4444,
          company_phone_num: 400 - 000 - 0000,
          company_email: 'twitter@gmail.com',
          company_address: '444 main st',
          company_users: JSON.stringify([9, 10, 11]),
          company_admins: JSON.stringify([9, 11]),
          credits: 10,
          unlimited_tier: false
        },
        {
          companyId: 5,
          company_name: 'Uber',
          company_code: 5555,
          company_phone_num: 500 - 000 - 0000,
          company_email: 'uber@gmail.com',
          company_address: '555 main st',
          company_users: JSON.stringify([12, 13, 14, 15]),
          company_admins: JSON.stringify([13, 15]),
          credits: 0,
          unlimited_tier: true
        },
        {
          companyId: 6,
          company_name: 'Lyft',
          company_code: 6666,
          company_phone_num: 600 - 000 - 0000,
          company_email: 'lyft@gmail.com',
          company_address: '666 main st',
          company_users: JSON.stringify([16]),
          company_admins: JSON.stringify([16]),
          credits: 0,
          unlimited_tier: true
        }
      ]);
    });
};