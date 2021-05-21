var cart = [];
var products = [];
var logged_inn=false;
var list=null;

var h_row1 = document.getElementById("0");;

function add_cart(){
    row=this.parentElement.parentElement
    localStorage.setItem(products[row.id][1], 1)
    doShowAll()
}

function more_info(){
    row = this.parentElement.parentElement;
    var h_describ = row.querySelector(".card-text")
    if(h_describ.innerHTML === products[row.id][3]){
        h_describ.innerHTML = products[row.id][4];
    }else{
        h_describ.innerHTML = products[row.id][3];
    }
    
    
}

function the_func(data) {

    console.log("Rendering data:"+data)
    var h_list = document.getElementById("container");


    console.log('My DOM list: ' + h_list);
    console.log('data length:' + data.length + 'data: ' + data);

    for (var i = 0; i < data.length; i++) {
        console.log("Start på en rundre for loop")
        console.log('item rendering: ' + data[i]);
        console.log(i)

        products[i] = data[i];
        [idP, nameP, price, summary, description, picture] = data[i];

        var cloned_row = h_row1.cloneNode(true);
        cloned_row.id = i;

        console.log(cloned_row.id)

        var h_title = cloned_row.querySelector(".name");
        h_title.innerHTML = idP.toString() + ". " + nameP;

        var h_pris = cloned_row.querySelector(".pris");
        h_pris.innerHTML = price;

        var h_summary = cloned_row.querySelector(".card-text");
        h_summary.innerHTML = summary;

        var h_btn1 = cloned_row.querySelector(".btn1");
        h_btn1.onclick = more_info;

        var h_btn2 = cloned_row.querySelector(".btn2");
        h_btn2.onclick = add_cart;

        var h_pic =cloned_row.querySelector(".card-img");
        h_pic.src= picture

        //h_list.insertBefore(cloned_row, h_list.querySelector(".first_row"));
        h_list.appendChild(cloned_row);

        //document.body.appendChild(h_list);

        //console.log("test");
        doShowAll()

    }


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
    var sum=0;
    list="<tr><th>Item</th><th>Value</th></tr>\n";
    var i=0;
    for(i=0; i< localStorage.length; i++){
        key=localStorage.key(i);
        list += "<tr><td>" + key + "</td><td>" + localStorage.getItem(key) + "</td></tr>\n";
        for(var o = 0;o<products.length; o++){
            if(key === products[o][1] || key === o){
                sum += products[o][2];
                break;
            }
        }
    }
    if (list=="<tr><th>Item</th><th>Value</th></tr>\n") {
        list+= "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>";
    }
    list += "<tr><td>Total price:</td><td>" + sum + "</td></tr>\n";
    list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>";
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
    document.getElementById("Melding").innerHTML="";
    /*for (i=0; i<localStorage.length; i++){
        var name = localStorage.key(i);
        localStorage.removeItem(name);

    }*/
}

function buy(){
    var txt;
    if(confirm("Congratulations you get it all for free, do you want that?")){
        txt="You said yes"
    }else{
        txt="You said no"
    }
    document.getElementById("Melding").innerHTML=txt;
}