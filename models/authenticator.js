var pg_conn = require("./pg_config");

async function authen(user, pass)
{
    var authenticated = false;
    let shop_id;
    const auth_query =
    {
        Text: 'SELECT * FROM users WHERE name = $1 AND passwd=$2',
        values: [user, pass]
    };
    var query_data = await pg_conn.query(acc_query);
    if (query_data.rowCount==1)
    {
        authenicated = true;
        shop_id = query_data.rows[0].shop_id;
        role= query_data.rows[0].role;
    }
    //console.log(authenticated);
    //console.log(query_data);
    return [authenticated, shop_id, role];
}

module.exports= router;