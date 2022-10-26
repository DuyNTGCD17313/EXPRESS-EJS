const Pool= require('pg').Pool;
const pg_conn = new Pool({
    user: 'ibcnmyqvnewyxl',
    host: 'ec2-3-219-19-205.compute-1.amazonaws.com',
    database: 'des269urm4lajf',
    password: '78e4f7506686ee10445fd4457627d948b6cd439c62ee40d97365e17c377245cb',
    port: 5432,
    ssl:{
            rejectUnauthorized:false,
    },
  })

module.exports= pg_conn;