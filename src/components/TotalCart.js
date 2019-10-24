import React, { Component } from 'react'

export default class TotalCart extends Component {
    render() {
        var { list } = this.props
        // console.log(list)
        var subtotal = 0
        list.forEach((val, index) => {
            if (val.quatity > 0)
                subtotal += val.quatity *( (100 - val.status) * val.price / 100)
            // subtotal.toFixed(2)
        })
        // console.log(subtotal)
        var  delivery = subtotal * 5 / 100
        var discount = subtotal * 10 / 100
        var total = subtotal - (delivery + discount)
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                        <div className="cart-total mb-3">
                            <h3>Cart Totals</h3>
                            <p className="d-flex">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </p>
                            <p className="d-flex">
                                <span>Delivery</span>
                                <span>${delivery}</span>
                            </p>
                            <p className="d-flex">
                                <span>Discount</span>
                                <span>${discount}</span>
                            </p>
                            <hr />
                            <p className="d-flex total-price">
                                <span>Total</span>
                                <span>${total}</span>
                            </p>
                        </div>
                        <p className="text-center"><a href="checkout.html" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
