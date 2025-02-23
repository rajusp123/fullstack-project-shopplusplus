import express from 'express'
import {placeOrder,placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)


orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)


orderRouter.post('/userorders', authUser, userOrders)

orderRouter.get('/test', (req, res) => {
    res.json({ message: "Order route is working!" });
});


export default orderRouter