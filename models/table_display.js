var pg_conn = require('./pg_config')
//Define a function to display products table for a shop 
function display_products(shop_id){
    //Query DB to get the table date
    let products_query = {
        Text: 'SELECT * FROM products WHERE shop_id=$1',
        values: [shop_id]
    }
    const data = await pg_conn.query(products_query);
    pg_conn.end;
    //init the table_string, with the table tag    
    let table_string =
        `<table borders='1'>
            <tr>`;
    //display all headers of table
    let num_fields = data.fields.length;
    for (let i=0; i<num_fields; i ++){
        table_string+= `<th>${data.fields[i].name}</th>`;
    }
    table_string += `</tr>`;    
    //display all rows of table
    let num_rows = data.rowCount;
    for(let i =0; i<num_rows; i++){
        table_string += `<tr>`;
        for (let j=0; j<num_fields; j++) {
            let field_name = data.field[j].name
            let cell = data.rows[i].fields_name;
            table_string += `<td>${cell}</td>`;
        }
    }
    table_string += `<th>
        <button>type='submit' value='Insert'> insert</button>
        <button>type='submit' value='Delete' name =${data.rows[i].id}> delete</button>
        <button>type='submit' value='Update'> Update</button>
    <th>`;
    table_string += `</tr></form>`;
    }    
    table_string += `
    <table>`;
     //console.log("Data: -->")
    //console.log(data)
    //console.log(table_string
    //return table_string;
}
module.exports = display_products;