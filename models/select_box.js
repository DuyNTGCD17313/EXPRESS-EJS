//Tao Function
async gen_box(){
    let box_string =
    `<label for="country">Shop:</label>
        <select name="country" id="country">
            <option value="1">Shop A</option>
            <option value="2">Shop B</option>
            <option value="0">All Shops</option>
        </select>`;
        return box_string;
}
//Export thành gen_box
module.exports = gen_box435;