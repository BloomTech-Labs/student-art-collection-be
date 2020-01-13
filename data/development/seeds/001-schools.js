
exports.seed = function(knex) {
  return knex('schools').insert([
    { 
      school_id: 'KcfQHI6dMwQpQg9yvPB4ctD1gNi1',
      school_name: 'West High School',
      email: 'studentartco@gmail.com',
      address: '123 West St',
      city: 'Westtown',
      zipcode: '12345'
    }
  ]);
};