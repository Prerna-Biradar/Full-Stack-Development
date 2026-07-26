const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    image: "https://picsum.photos/200?1"
  },
  {
    id: 2,
    name: "Phone",
    price: 25000,
    image: "https://picsum.photos/200?2"
  },
  {
    id: 3,
    name: "Watch",
    price: 5000,
    image: "https://picsum.photos/200?3"
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server Running on http://localhost:3000");
});