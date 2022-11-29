const items = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ];


//1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
items.map(item=> {
     if(item.price <= 10){
     	console.log("Name: "+item.name+" Price: "+item.price);
     }
    });


//2 . Filter and show the product that will be expensive in the array
items.map(item=> {
     if(item.price > 10){
     	console.log("Name: "+item.name+" Price: "+item.price);
     }
    });


//3 . Calculate the full price of all product combined
let total=0;
items.map(item=> {
     total=total+item.price; 
    });
console.log(total);
console.log("Price Total"+total);


//4 . Calculate the full price of all product combined and remove product that are under the 10 dollar
let total=0;
items.map(item=> { 
    if(item.price > 10){
        total=total+item.price;
    }else{
        
    }});
     console.log("Price Total"+total);