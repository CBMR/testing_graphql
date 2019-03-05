exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          userId: 1,
          user_name: 'Rick-1 James',
          user_phone_num: 1110001111,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([1, 4]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 2,
          user_name: 'Rick-2 James',
          user_phone_num: 1110002222,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([3]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 3,
          user_name: 'Rick-3 James',
          user_phone_num: 1110003333,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([4, 5]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 4,
          user_name: 'Rick-4 James',
          user_phone_num: 1110004444,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([6]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 5,
          user_name: 'Rick-5 James',
          user_phone_num: 1110005555,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([5, 4]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 6,
          user_name: 'Rick-6 James',
          user_phone_num: 1110006666,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([5]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 7,
          user_name: 'Rick-7 James',
          user_phone_num: 1110007777,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([4]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 8,
          user_name: 'Rick-8 James',
          user_phone_num: 1110008888,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([5, 2, 3]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 9,
          user_name: 'Rick-9 James',
          user_phone_num: 1110009999,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([6]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 10,
          user_name: 'Rick-10 James',
          user_phone_num: 1110001010,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([3, 1]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 11,
          user_name: 'Rick-11 James',
          user_phone_num: 1110001011,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([6, 2, 1]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 12,
          user_name: 'Rick-12 James',
          user_phone_num: 1110001212,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([1]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 13,
          user_name: 'Rick-13 James',
          user_phone_num: 1110001313,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([2]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 14,
          user_name: 'Rick-14 James',
          user_phone_num: 1110001414,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([3]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 15,
          user_name: 'Rick-15 James',
          user_phone_num: 1110001515,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([4]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 16,
          user_name: 'Rick-16 James',
          user_phone_num: 1110001616,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([2, 5]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 17,
          user_name: 'Rick-17 James',
          user_phone_num: 1110001717,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([6, 3]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
        {
          userId: 18,
          user_name: 'Rick-18 James',
          user_phone_num: 1110001818,
          created_ts: '2019-02-22 06:41:08 pm',
          updated_ts: '2019-02-23 01:36:33 pm',
          user_companies: JSON.stringify([1, 2]),
          active: true,
          user_email: 'rick.james@gmail.com'
        },
      ]);
    });
};