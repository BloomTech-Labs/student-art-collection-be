
exports.seed = function(knex) {
    return knex('art').insert([
      {
        title: '',
        category: 1,
        price: 50,
        artist_name: 'Student 1',
        sold: false,
        school_id: 1,
        description: ''
      },
      {
        title: '',
        category: 2,
        price: 50,
        artist_name: 'Student 1',
        sold: false,
        school_id: 1,
        description: ''
      },
      {
        title: '',
        category: 3,
        price: 50,
        artist_name: 'Student 2',
        sold: false,
        school_id: 1,
        description: ''
      },
      {
        title: '',
        category: 4,
        price: 50,
        artist_name: 'Student 2',
        sold: false,
        school_id: 1,
        description: ''
      },
      {
        title: '',
        category: 5,
        price: 50,
        artist_name: 'Student 1',
        sold: false,
        school_id: 1,
        description: ''
      }
    ]);
};
