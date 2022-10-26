var pg_conn = require('./pg_config');
async function gen_box(){
    //QUERY DB to get the table data
    let shop_query = `SELECT shops.id, shops.name, user.role FROM shops
        JOIN users ON shops.id = users.shop_id`;
    const data = await pg_conn.query(shop_query);
    let box_string = `
        <form action="select_box" method="post">
            <label for="shop">Choose a shop::</label>
                <select name="shop" id="shop">
                    <option value=0 selected>All shops</option>`;
    let select_items = data.rowCount;
    for (let i = 0; i < select_items; i++){
        if (data.rows[i].role != "director"){
            box_string += `<option value=${data.rows[i].id}>${data.row[i].name}</option>`;
        }
    }
    box_string += `</select>
        <input type="submit" value="view">
    </form>`;
    //console.log(data);
    return box_string;
}
module.exports = gen_box;