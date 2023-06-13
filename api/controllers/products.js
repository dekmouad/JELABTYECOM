const Product = require("../models/Product");
// Function to create a new product

exports.createProduct = (req, res) => {
    // Creating a new Product object with the data from the request body

  const newProduct = new Product(req.body); 
    // Saving the new product to the database
 
  newProduct.save().then((savedProduct) => res.status(200).json(savedProduct))
  .catch((err) => res.status(500).json(err));
};
// Function to update an existing product

exports.updateProduct = (req, res) => {
    // Finding and updating the product with the provided id

  Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then((updatedProduct) => res.status(200).json(updatedProduct))
    .catch((err) => res.status(500).json(err));
};
// Function to delete a product

exports.deleteProduct = (req, res) => {
    // Finding and deleting the product with the provided id

  Product.findByIdAndDelete(req.params.id)
    .then(res.status(200).json("Product has been deleted..."))
    .catch((err) => res.status(500).json(err));
};
// Function to get a specific product by id

exports.getProduct = (req, res) => {
    // Finding a product with the provided id

  Product.findById(req.params.id)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json(err));
};
// Function to get all products

exports.getAllProducts = (req, res) => {
    // Handling query parameters for filtering products

  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qsearch = req.query.search;
  let products;
  // Check if the 'new' query parameter is provided

  if (qNew) products = Product.find().sort({ createdAt: -1 }).limit(1);
    // Check if the 'category' query parameter is provided

  else if (qCategory)
    products = Product.find({ categories: { $in: [qCategory] } });
  // Check if the 'search' query parameter is provided

  else if (qsearch)
    products = Product.find({ $or: [{ title : {'$regex': qsearch,$options: 'i'}},
                                         { desc : {'$regex': qsearch,$options: 'i'}},
                                         { color : {'$regex': qsearch,$options: 'i'}},
                                         { type : {'$regex': qsearch,$options: 'i'}},
                                         { categories : {'$regex': qsearch,$options: 'i'}},
                                         { brand : {'$regex': qsearch,$options: 'i'}}]});
  // Fetch all products

  else products = Product.find();

  products
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(500).json(err));
};
