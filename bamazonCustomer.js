//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

const pass = "JoeKerr!"

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

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

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

let productName = [];
let departmentName = [];
let price = [];
let stockQuantity = []; 

//function to display all the data on the SQL table
function displayItems() {
    //connection to target what data to present ("*" means all)
    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
        for (var i = 0; i < results.length; i++) {
            //formatting for display in terminal
            console.log('\x1b[37m%s\x1b[0m', "\n☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵");
            console.log('\x1b[36m%s\x1b[0m', results[i].product_name);
            console.log("▶ ID: " + '\x1b[32m%s\x1b[0m', + (i+1));
            console.log("▶ Price: " + '\x1b[32m%s\x1b[0m', "$" + results[i].price);
            console.log("▶ Quantity Available: " + '\x1b[32m%s\x1b[0m', + results[i].stock_quantity);
            productName.push(results[i].product_name);
            departmentName.push((i+1));
            price.push(results[i].price);
            stockQuantity.push(results[i].stock_quantity);
        };
        console.log('\x1b[37m%s\x1b[0m', "\n☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵\nPress an arrow key to continue.");
    });
};

displayItems();

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

let consumerQuestions = [
    {
        type: 'input',
        name: 'Q1',
        message: "What is the ID of the product you would like to buy?",
        default: "1"
    },
    {
        type: 'input',
        name: 'Q2',
        message: "How many would you like to buy?",
        default: "0"
    }
];

function customerPrompt() {
    inquirer
    .prompt(consumerQuestions)
    .then(answers => {

    // UPDATE products SET stock_quantity = stock_quantity + (Q2) WHERE item_id = (Q1);

        connection.query('SELECT * FROM products', function (error, results, fields) {
            if (error) throw error;
            if ((results[answers.Q1 - 1].stock_quantity) >= answers.Q2) {
                //THIS IS WHAT SHOULD HAPPEN BUT INSIDE THE MYSQL DATABASE
                console.log((results[answers.Q1 - 1].stock_quantity) - answers.Q2);
/*                 console.log("Total Spent ($): " + results) */

/*                 connection.query('UPDATE products SET stock_quantity = stock_quantity + ' + Q2 + ' WHERE item_id = ' + Q1, function (err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " records updated.");
                }); */

            } else {
                console.log('\x1b[31m%s\x1b[0m', "Insufficient quantity!\n");
                customerPrompt();
            };
        });



    });
};

customerPrompt();

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟


























































































    
/*     '\x1b[31m%s\x1b[0m', */
   