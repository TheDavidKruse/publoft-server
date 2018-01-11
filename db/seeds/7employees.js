
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          emp_id: 1,
          colName: 'rowValue1',
          link_to_linkedin: ''
        },
        {emp_id: 2, colName: 'rowValue2'},
        {emp_id: 3, colName: 'rowValue3'}
      ]);
    });
};
