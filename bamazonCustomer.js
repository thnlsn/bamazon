const pass = "JoeKerr!"

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

//load/require the mysql and inquierer node modules
const mysql      = require('mysql');
const inquirer = require('inquirer');

//connection details
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : pass,
  database : 'bamazon'
});
 
connection.connect();

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

//function to display all the data on the SQL table
function displayItems() {
    //connection to target what data to present ("*" means all)
    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
/*         console.log(results); */
        for (var i = 0; i <= results.length; i++) {
            console.log("☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵");
            console.log(results[i].product_name);
            console.log("▶ ID: " + (i+1));
            console.log("▶ Price ($): " + results[i].price);
            console.log("▶ Quantity Available: " + results[i].stock_quantity);
        };
    });
/*     let productName = [];
    let departmentName = [];
    let price = [];
    let stockQuantity = []; */
};

displayItems();

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

inquirer
  .prompt([
    /* Pass your questions in here */
    {type: 'input', name: 'id', message: "What is the item_id (#) of the product you would like to buy?"},
    {type: 'input', name: '#', message: "How many (#) would you like to buy?"}
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
  });