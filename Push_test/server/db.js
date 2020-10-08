const Pool = require ("pg").Pool;
const pool = new Pool ({
user: "postgres",
password: "amin",
host:"localhost",
port:5432,
database:"poc"
});

module.exports=pool;