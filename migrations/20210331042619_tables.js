
exports.up = function (knex) {
    return knex.schema
      .createTable('candidate', (table) => {
      table.increments().primary();
      table.string('name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.timestamps(true, true);
      })
      .createTable('test_score', (table) => {
        table.increments().primary();
        table.integer('candidate_id').unsigned();
        table.foreign('candidate_id').references('id').inTable('candidate');
        table.integer('max_marks_eachRound', 255).defaultTo(10);
        table.integer('marks@firstRound', 255);
        table.integer('marks@secondRound', 255);
        table.integer('marks@thirdRound', 255);
        table.timestamps(true, true);
      })
     
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('candidate')
      .dropTableIfExists('test_score')
  };
  