var cart = [];
var products = [];
var logged_inn=false;
var list=null;

var h_row1 = document.getElementById("0");;

function add_cart(){

}

function more_info(){
    row = this.parentElement.parentElement;
    var describ = products[row.id][4];
    console.log(`List: ${describ}`)
    var h_describ = row.querySelector(".card-text")
    h_describ.innerHTML = describ;
    
}

function the_func(data) {

    console.log("Rendering data:"+data)
    var h_list = document.getElementById("container");


    console.log('My DOM list: ' + h_list);
    console.log('data length:' + data.length + 'data: ' + data);

    for (var i = 0; i < data.length; i++) {
        console.log("Start på en rundre for loop")
        console.log('item rendering: ' + data[i]);

        products[i] = data[i];
        [idP, nameP, price, summary, description] = data[i];

        var cloned_row = h_row1.cloneNode(true);
        cloned_row.id = i;

        var h_title = cloned_row.querySelector(".name");
        h_title.innerHTML = idP.toString() + " Name: " + nameP;

        var h_pris = cloned_row.querySelector(".pris");
        h_pris.innerHTML = price;

        var h_summary = cloned_row.querySelector(".card-text");
        h_summary.innerHTML = summary;

        var h_btn1 = cloned_row.querySelector(".btn1");
        h_btn1.onclick = more_info;

        var h_btn2 = cloned_row.querySelector(".btn2");
        h_btn2.onclick = add_cart;

        //h_list.insertBefore(cloned_row, h_list.querySelector(".first_row"));
        h_list.appendChild(cloned_row);

        //document.body.appendChild(h_list);

        //console.log("test");


    }
    console.log("Remove")
    //h_row1.remove()

}
function remove_products(){
    var h_list = document.getElementById("container");
    var rows= h_list.querySelectorAll(".first_row")
    rows.forEach(node => node.remove())
}

function load_products() {
    fetch("/products")
        .then(response => response.json())
        .then(data => {
            if (h_row1 != null){
                remove_products();
            }
                the_func(data);
        });
}
load_products();

if (logged_inn==true){
    var mysql=require('mysql')

    var con= mysql.createConnection({
        host: "mysql1",
        user: 'anonymous',
        password: 'pikachoo',
        database: 'portefolio2'
    })
}

function doShowAll(){
    var key="";
    list="<tr><th>Item</th><th>Value</th></tr>\n";
    var i=0;
    for(i=0; i< localStorage.length; i++){
        key=localStorage.key(i);

        list += "<tr><td>" + key + "</td><td>" + localStorage.getItem(key) + "</td></tr>\n";
    }
    if (list=="<tr><th>Item</th><th>Value</th></tr>\n") {
        list+= "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>";
    }
    document.getElementById('list').innerHTML = list;
}

function saveItem(){
    var name = document.forms.shoppinglist.name.value;
    var data = document.forms.shoppinglist.data.value;
    localStorage.setItem(name, data);

    doShowAll();
}
function modifyItem(){
    var mName =document.forms.shoppinglist.name.value;
    var mdata= document.forms.shoppinglist.data.value;

    if(localStorage.getItem(mName) != null){
        localStorage.setItem(mName, mdata);
    }

    doShowAll();
}

function removeItem(){
    var name = document.forms.shoppinglist.name.value;
    document.forms.shoppinglist.data.value = localStorage.removeItem(name);
    doShowAll();
}

function removeAll(){
    window.localStorage.clear();
    list="<tr><th>Item</th><th>Value</th></tr>\n"
    doShowAll()
    /*for (i=0; i<localStorage.length; i++){
        var name = localStorage.key(i);
        localStorage.removeItem(name);

    }*/
}