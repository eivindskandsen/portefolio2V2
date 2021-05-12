
var users =[]
var array=[]

var h_row1=null

var x = document.getElementsByClassName("pris1")

console.log(x)


var y = document.getElementsByClassName("name1")


var z= {navn : y, pris: x }

array[0]=z



function the_func(data){
    var h_list= document.getElementById("container");
    if(h_row1==null){
        h_row1=document.getElementById("0");
    }
    console.log('My DOM list: '+h_list);
    console.log('data length:'+ data.length +'data: '+data);

    for(var i=0; i < data.length; i++){
        console.log('item rendering: '+data[i]);


        [idP, nameP, price] =data[i];

        var cloned_row = h_row1.cloneNode(true);
        cloned_row.id =i;

        var h_title = cloned_row.querySelector(".name");
        h_title.innerHTML=idP.toString() +". Name: "+ nameP;

        var h_pris = cloned_row.querySelector(".pris");
        h_pris.innerHTML= price;


        h_list.insertBefore(cloned_row, h_list.querySelector(".container"));
        h_list.appendChild(cloned_row);

        document.body.appendChild(h_list);

        console.log("test");

    }
}

fetch("/products")
    .then(response => response.json())
    .then(data => the_func(data));