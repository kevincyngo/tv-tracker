const express = require('express')

const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})


app.listen(3000, () => console.log("server ready"));

// app.get('*', function(req, res) {
//     res.sendfile('index.html'); // load the single view file
// });

// app.get('/', (request,response) => {
// 	response.render('index')
// })

//login
app.get('/api/users', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (error, results) => {
        if(results.rowCount == 0) {
          console.log("incorrect email and password combination");
        } else {
          res.status(200).json(results.rows);
          console.log("comibnation found");
        }
      })
})


//register
app.post('/api/users',(req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
      // if (error) {
      //   throw error;
      // }
      if(results.rowCount == 0) {
        pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password], (error, results) => {
          console.log("user added.");
        
      
        });
      } else {
        res.status(200).json(results.rows);
        console.log("user already exists.");
      }
    })




});

