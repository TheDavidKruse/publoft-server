
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Mat'
          last_name: 'Sherman'
          email: 'm@s.com'
          password: 'pass'
          user_type: 1
        },
        {
          first_name: 'Editor'
          last_name: 'Editor'
          email: 'e@e.com'
          password: 'pass'
          user_type: 2
        },
        {
          first_name: 'Writer'
          last_name: 'Writer'
          email: 'w@w.com'
          password: 'pass'
          user_type: 4
        },
        {
          first_name: 'David'
          last_name: 'Kruse'
          email: 'd@k.com'
          password: 'pass'
          user_type: 3
        },
        {
          first_name: 'Customer1'
          last_name: 'Customer'
          email: 'c1@c.com'
          password: 'cust'
          user_type: 5
        },
        {
          first_name: 'Customer2'
          last_name: 'Customer'
          email: 'c2@c.com'
          password: 'cust'
          user_type: 5
        },
        {
          first_name: 'Customer3'
          last_name: 'Customer'
          email: 'c3@c.com'
          password: 'cust'
          user_type: 5
        },
        {
          first_name: 'Customer4'
          last_name: 'Customer'
          email: 'c4@c.com'
          password: 'cust'
          user_type: 5
        },
      ]);
    });
};
