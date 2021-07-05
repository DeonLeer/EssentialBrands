const {Pool} = require('pg')

const pool = new Pool({
  user: 'phlulhan',
  host: 'kashin.db.elephantsql.com',
  database: 'phlulhan',
  password: '4SSwicxOSkENYmmPwHAczpjw3NTWPus9',
  port: 5432
});

// client.connect()

// client.query('SELECT * FROM products;')
// .then( (response) => {
//   console.log(response.rows)
// })

const getAllProducts = function() {
  return pool.query(`SELECT * FROM products ORDER BY brandid DESC;`)
  .then((data) => {
    return data.rows;
  });
};
exports.getAllProducts = getAllProducts;