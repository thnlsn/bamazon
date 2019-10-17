const pass = "Bn21dt05!"



























































//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

let mysql      = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : pass,
  database : 'bamazon'
});
 
connection.connect();

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

function displayItems() {

    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        console.log("===============================================\n===============================================\n===============================================\n===============================================\n===============================================");
    });
    connection.query('SELECT MAX(item_id) FROM products', function (error, results, fields) {
        if (error) throw error;
        console.log(results[0]);
        console.log("===============================================\n===============================================\n===============================================\n===============================================\n===============================================");
    });

    let productName = [];
    let departmentName = [];
    let price = [];
    let stockQuantity = [];
};

displayItems();