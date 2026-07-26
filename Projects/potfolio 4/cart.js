let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart(){

let output="";
let total=0;

cart.forEach(item=>{

output+=`
<div class="card">
<h2>${item.name}</h2>
<p>₹${item.price}</p>
</div>
`;

total+=item.price;

});

document.getElementById("cartItems").innerHTML=output;
document.getElementById("total").innerHTML="Total : ₹"+total;

}

function checkout(){

alert("Order Placed Successfully");

localStorage.removeItem("cart");

location.reload();

}

loadCart();