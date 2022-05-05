const { Pool } = require('pg');

const PG_URI = 'postgres://vthtuuea:E7ywr3hqCQ3l30EY-mJ-IvzRvCixR4fl@heffalump.db.elephantsql.com/vthtuuea';

const pool = new Pool({
  connectionString: PG_URI
});

// Database will have a categories list with a foreign id
// which points to a table with all the expenses logged to that category

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};