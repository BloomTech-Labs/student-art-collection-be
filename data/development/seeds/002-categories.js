
exports.seed = function(knex) {
    return knex('categories').insert([
      {
        category: 'Photography'
      },
      {
        category: 'Drawing'
      },
      {
        category: 'Painting'
      },
      {
        category: 'Sculpture'
      },
      {
        category: 'Other'
      }
    ]);
};
