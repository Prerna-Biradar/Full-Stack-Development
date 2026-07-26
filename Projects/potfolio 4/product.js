const products=[
{id:1,name:"Laptop",price:60000,image:"https://picsum.photos/200?1"},
{id:2,name:"Phone",price:25000,image:"https://picsum.photos/200?2"},
{id:3,name:"Headphones",price:3000,image:"https://picsum.photos/200?3"},
{id:4,name:"Watch",price:5000,image:"https://picsum.photos/200?4"}
];

const id = new URLSearchParams(window.location.search).get("id");

const product = products.find(p=>p.id==id);

document.getElementById("details").innerHTML=`
<div class="card">
<img src="${product.image}">
<h2>${product.name}</h2>
<h3>₹${product.price}</h3>
<p>Premium Quality Product</p>
</div>
`;