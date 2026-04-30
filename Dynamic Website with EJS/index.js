const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// stitic 
app.use(express.static(path.join(process.cwd(),'public')))

const products = [

    {
         id: 1,
    name: "laptop",
    des: "this is a apple laptop",
    price:1000
    },
  {
   
    id: 2,
    name: "phone",
    des: "this is a apple phone",
     price:4000
  },
  {
     id: 3,
    name: "keyboard",
    des: "this is a apple keyboard",
     price:6000
  }
];



app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.get("/", (req, res) => {
    res.render('index',{title:"product list",products})
   
});

app.get("/products/:id",(req,res)=>{
  const productId = req.params.id
  const product = products.find(product => product.id === parseInt(productId))
  // console.log(product)
  if(!product){
    res.status(404).send("product is not found")
  }
  res.render("product",{product})

})

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
