var express = require('express');
var router = express.Router();
var authen = require('../models/authenticator');
var gen_box = require('../models/authenticator');
const display_products = require('../models/table_display');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ATN SHOP' });
});

// Process for POST request
router.post('/', function(req, res, next) {
  res.render('login', { title: 'ATN SHOP', 
  Message: "Please input username and password for login" });
});
//Proccess for POST request from Select_box
router.post('/select_box', async function(req, res, next){
  let shop_id = req.body.shop;
  //console.log("REQUEST DATA: " + shop_id);
  let.box_string = await gen_box();
  let table = await display_products(shop_id);
  res.render('admin',{title: 'welcome to ATN SHOP',
    name: "Director",
    select_box: box_string,
    table_string:table});
});

//Process for login POST request
router.post('/login', async function(req, res, next) {
  let username = res.body.username;
  let password = res.body.password;
  console.log(username + ":" + password);
  let [authenticated, shop_id, role] = await authen(username, password)
  console.log(authenticated)

  if (authenticated == true & role == 'shop'){
    let table = await display_products(shop_id);
    res.render('users',{title: 'welcome to ATN SHOP',
                    name:username,
                    table_string: table});
  }
  else if (authenticated == true & role == 'director'){
    //let table = await display_products(shop_id);
    
    res.render('users',{title: 'welcome to ATN SHOP',
                    name:username,
                    select_box: table});
  }
  else {
  res.render('login', { title: 'ATN shop', 
  messege: "wrong username or password!" });
  }
});
//Process for CRUD
router.post('/crud', async function(req, res, next){
  console.log(req.body);
})

module.exports = router;
