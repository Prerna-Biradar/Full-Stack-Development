window.addEventListener("hashchange", route);

function route() {
const page = location.hash;

if(page=="#home"){
location.href="index.html";
}
else if(page=="#cart"){
location.href="cart.html";
}
else if(page=="#checkout"){
location.href="checkout.html";
}
}

route();