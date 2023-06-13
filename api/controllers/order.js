const Order = require("../models/Order");

// Function to create a new order

exports.createOrder = (req, res) => {
      // Creating a new Order object with the data from the request body

    const newOrder = new Order(req.body);
      // Saving the new order to the database

    newOrder.save().then(
        savedOrder => res.status(200).json(savedOrder)
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to update an existing order

exports.updateOrder = (req, res) => {
      // Finding and updating the order with the provided ID

    Order.findByIdAndUpdate(req.params.id, {$set: req.body,}, {new: true}).then(
        updatedOrder => res.status(200).json(updatedOrder)
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to delete an existing order

exports.deleteOrder = (req, res) => {
      // Finding and deleting the order with the provided ID

    Order.findByIdAndDelete(req.params.id).then(
        res.status(200).json("Order has been deleted...")
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to get all orders of a specific user

exports.getOneUserOrders = (req, res) => {
      // Finding all orders with the provided userId

    Order.find({userId: req.params.userId}).then(
        orders => res.status(200).json(orders)
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to get all orders

exports.getAllOrders = (req, res) => {
    Order.find().then(
          // Finding all orders

        orders => res.status(200).json(orders)
    ).catch(
        err => res.status(500).json(err)
    )
}
// Function to get the monthly income based on optional productId

exports.getMonthlyIncome = (req, res) => {
      // Extracting the optional productId and current date

    const productId = req.query.pid;
    const date = new Date();
      // Calculating the date range for the previous two months

    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
      // Aggregating orders based on the date range and optional productId

    Order.aggregate([
        {
            $match: {
                createdAt: {$gte: previousMonth},
                ...(productId && {
                    products: {$elemMatch: {productId}},
                }),
            },
        },
        {
            $project: {
                month: {$month: "$createdAt"},
                sales: "$amount",
            },
        },
        {
            $group: {
                _id: "$month",
                total: {$sum: "$sales"},
            },
        },
    ]).then(
        income => res.status(200).json(income)
    ).catch(
        err => res.status(500).json(err)
    )
}