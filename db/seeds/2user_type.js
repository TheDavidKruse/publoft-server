
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_type').insert([
        { type: 'Admin'},
        { type: 'Editor'},
        { type: 'Developer'},
        { type: 'Writer'},
        { type: 'Customer'},
      ]);
    });
};
