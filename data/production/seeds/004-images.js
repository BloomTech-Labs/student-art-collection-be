
exports.seed = function(knex) {
  return knex('images').insert([
    {
      image_url: 'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      art_id: 1
    },
    {
      image_url: 'https://images.pexels.com/photos/2303796/pexels-photo-2303796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      art_id: 2
    },
    {
      image_url: 'https://images.pexels.com/photos/207666/pexels-photo-207666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      art_id: 3
    },
    {
      image_url: 'https://images.pexels.com/photos/545470/pexels-photo-545470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      art_id: 4
    },
    {
      image_url: 'https://images.pexels.com/photos/1646981/pexels-photo-1646981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      art_id: 5
    },
    {
      image_url: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=940',
      art_id: 1
    },
    {
      image_url: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      art_id: 2
    },
    {
      image_url: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      art_id: 3
    },
    {
      image_url: 'https://images.pexels.com/photos/545470/pexels-photo-545470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      art_id: 4
    },
    {
      image_url: 'https://images.pexels.com/photos/1646981/pexels-photo-1646981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      art_id: 5
    }
  ]);
};
