const express = require("express");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const panierRoute = require("./routes/panier");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const newsLetter = require("./routes/newsLetter");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const app = express();

// Enable Cross-Origin Resource Sharing

    app.use(cors());
    // Parse incoming requests with JSON payloads

    app.use(express.json());
    // Register the route handlers

    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    app.use("/api/products", productRoute);
    app.use("/api/panier", panierRoute);
    app.use("/api/orders", orderRoute);
    app.use("/api/checkout", stripeRoute);
    app.use("/api/newsletter", newsLetter);
    // Serve the Swagger UI for API documentation

    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    

module.exports = app;
