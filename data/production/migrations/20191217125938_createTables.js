
exports.up = function(knex) {
    return knex.schema.createTable('schools', tbl => {
        tbl.bigIncrements()
        tbl.string('school_id').notNullable()
        tbl.string('school_name').notNullable()
        tbl.string('email').notNullable().unique()
        tbl.string('address').notNullable()
        tbl.string('city').notNullable()
        tbl.string('zipcode').notNullable()
    }).createTable('categories', tbl => {
        tbl.bigIncrements()
        tbl.string('category')
    }).createTable('art', tbl => {
        tbl.bigIncrements()
        tbl.string('title').notNullable()
        .defaultTo('Untitled')
        tbl.bigInteger('category')
        .notNullable()
        .references('id')
        .inTable('categories')
        tbl.bigInteger('price')
        .defaultTo(25)
        tbl.string('artist_name')
        .defaultTo('Anonymous')
        tbl.boolean('sold')
        .defaultTo(false)
        tbl.bigInteger('school_id')
        .notNullable()
        .references('id')
        .inTable('schools')
        .onDelete('CASCADE')
        tbl.string('description', 2000)
        .defaultTo('No description provided')
        tbl.timestamp('date_posted')
        .defaultTo(knex.fn.now())
    }).createTable('images', tbl => {
        tbl.bigIncrements()
        tbl.string('image_url', 2000)
        tbl.bigInteger('art_id')
        .notNullable()
        .references('id')
        .inTable('art')
        .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('images').dropTableIfExists('art').dropTableIfExists('categories').dropTableIfExists('schools')
  };
  