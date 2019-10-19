//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

const pass = "JoeKerr!";

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

//global arrays to be used for calculations
let productName = [];
let itemID = [];
let price = [];
let stockQuantity = [];

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

//function to push current mysql database information
function pushToGlobalArr() {
    //first empty the arrays
    productName.length = 0;
    itemID.length = 0;
    price.length = 0;
    stockQuantity.length = 0;
    //then push updated information in
    productName.push(results[i].product_name);
    itemID.push((i+1));
    price.push(results[i].price);
    stockQuantity.push(results[i].stock_quantity);
};

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

//function to turn quantity text red if out of stock
function checkAvailability(quantity, goodColor, badColor) {
    if (quantity > 0) {
        return goodColor;
    } else {
        return badColor;
    };
};

//function to display all items in stock, their names, ID's, price, and quantities.
function displayItems() {
    let green = "[32m";
    let red = "[31m";
    //connection to target what data to present ("*" means all)
    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        for (var i = 0; i < results.length; i++) {
            //formatting for display in terminal
            console.log('\x1b[37m%s\x1b[0m', "\n☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵");
            console.log('\x1b[36m%s\x1b[0m', results[i].product_name);
            console.log("▶ ID: " + '\x1b[32m%s\x1b[0m', + (i+1));
            console.log("▶ Price: " + '\x1b[32m%s\x1b[0m', "$" + results[i].price);
            console.log("▶ Quantity Available: " + '\x1b' + checkAvailability(results[i].stock_quantity, green, red) + '%s\x1b[0m', + results[i].stock_quantity);
        };
        console.log('\x1b[37m%s\x1b[0m', "\n☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵\n\n");
    });
};

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

let managerQuestions = [
    {
        type: 'list',
        name: 'options',
        message: "What would you like to do?",
        choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
        default: "View Products for Sale"
    },
];

function managerPrompt() {
    inquirer
    .prompt(managerQuestions)
    .then(answers => {

        console.log(answers);

        switch (answers.options) {
            case "View Products for Sale":
                console.log('\x1b[33m', "Displaying all products currently on sale...\n");
                displayItems(); //calling the function for displaying all items.
              break;

            case "View Low Inventory":
                console.log('\x1b[33m', "Displaying all products with a stock quantity below 5 units...\n");
              break;

            case "Add to Inventory":
                console.log('\x1b[33m', "Which product would you like to restock?\n");

              break;

            case "Add New Product":
                console.log('\x1b[33m', "Please provide the product name, department, price, and quantity to be added.\n");
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'Q1',
                        message: "What is the name of the product?",
                        default: "Product"
                    },
                    {
                        type: 'input',
                        name: 'Q2',
                        message: "Which department should it be added to?",
                        default: "General"
                    },
                    {
                        type: 'input',
                        name: 'Q3',
                        message: "What price ($) will this product be selling at?",
                        default: "999999999"
                    },
                    {
                        type: 'input',
                        name: 'Q4',
                        message: "How many should we order?",
                        default: "10"
                    }
                ])
                .then(promptAnswers => {
                    //code to insert new product to the mysql database table.
                    connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('" + promptAnswers.Q1 + "', '" + promptAnswers.Q2 + "', " + promptAnswers.Q3 + ", " + promptAnswers.Q4 + ");", function (err, result) {
                        if (err) throw err;
                        console.log('\x1b[33m%s\x1b[0m', "\nYou have successuly added " + promptAnswers.Q1 + " to the inventory list.\nCurrently ordering " + promptAnswers.Q4 + " " + promptAnswers.Q1 + "(s).\nThey will be added to the " + promptAnswers.Q2 + " department.\nThey will be priced at $" + promptAnswers.Q3 + " each.")
                    });    
                })
              break;
          };

    });
};

managerPrompt();

