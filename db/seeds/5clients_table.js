
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {
          client_id: 3,
          company_name: 'Control Alt Delete, Inc',
          contact_phone: null,
          keyword_industry_analysis: false,
        },
        {
          client_id: 4,
          company_name: 'Gecko, LLC',
          contact_phone: '18005555555',
          keyword_industry_analysis: false,
        },
        {
          client_id: 5,
          company_name: 'Incredibly, Inc',
          contact_phone: '18005555555',
          keyword_industry_analysis: true,
        },
      ]);
    });
};
