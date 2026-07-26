const products=[
{
id:1,
name:"Laptop",
price:60000,
image:"https://picsum.photos/200?1"
},
{
id:2,
name:"Phone",
price:25000,
image:"https://picsum.photos/200?2"
},
{
id:3,
name:"Headphones",
price:3000,
image:"https://picsum.photos/200?3"
},
{
id:4,
name:"Watch",
price:5000,
image:"https://picsum.photos/200?4"
}
];

let cart=[];

function showProducts(list){
const container=document.getElementById("products");
container.innerHTML="";

list.forEach(product=>{
container.innerHTML+=`
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addCart(${product.id})">
Add to Cart
</button>
</div>
`;
});
}

function addCart(id){
cart.push(id);
document.getElementById("count").innerText=cart.length;
alert("Product Added");
}

document.getElementById("search").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filter=products.filter(item=>
item.name.toLowerCase().includes(value)
);

showProducts(filter);

});

showProducts(products);