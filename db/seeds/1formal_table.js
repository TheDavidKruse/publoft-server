
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('casual_formal_scale').del()
    .then(function () {
      // Inserts seed entries
      return knex('casual_formal_scale').insert([
        { rating: 'Casual'},
        { rating: 'Somewhat casual'},
        { rating: 'In between'},
        { rating: 'Somewhat formal'},
        { rating: 'Formal'},
      ]);
    });
};
