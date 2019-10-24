import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="https://colorlib.com/preview/theme/winkel/index.html">Winkel</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a href="https://colorlib.com/preview/theme/winkel/index.html" className="nav-link">Home</a></li>
                                <li className="nav-item dropdown active">
                                    <a className="nav-link dropdown-toggle" href="https://colorlib.com/preview/theme/winkel/shop.html#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                                        <a className="dropdown-item" href="https://colorlib.com/preview/theme/winkel/shop.html">Shop</a>
                                        <a className="dropdown-item" href="https://colorlib.com/preview/theme/winkel/product-single.html">Single Product</a>
                                        <a className="dropdown-item" href="https://colorlib.com/preview/theme/winkel/cart.html">Cart</a>
                                        <a className="dropdown-item" href="https://colorlib.com/preview/theme/winkel/checkout.html">Checkout</a>
                                    </div>
                                </li>
                                <li className="nav-item"><a href="https://colorlib.com/preview/theme/winkel/about.html" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="https://colorlib.com/preview/theme/winkel/blog.html" className="nav-link">Blog</a></li>
                                <li className="nav-item"><a href="https://colorlib.com/preview/theme/winkel/contact.html" className="nav-link">Contact</a></li>
                                <li className="nav-item cta cta-colored"><a href="https://colorlib.com/preview/theme/winkel/cart.html" className="nav-link"><span className="icon-shopping_cart" />[0]</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
