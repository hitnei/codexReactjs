import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Nav extends Component {
    render() {
        var {list} = this.props
        var allCart = 0;
        list.map((val, index) => {
            allCart += val.quatity
            return null
        })
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light ftco_navbar bg-light ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/">Winkel</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                <li className="nav-item dropdown active">
                                    <a className="nav-link dropdown-toggle" href="/" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                                        <a className="dropdown-item" href="/">Shop</a>
                                        <a className="dropdown-item" href="/">Single Product</a>
                                        <a className="dropdown-item" href="/">Cart</a>
                                        <a className="dropdown-item" href="/">Checkout</a>
                                    </div>
                                </li>
                                <li className="nav-item"><a href="/" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Blog</a></li>
                                <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
                                <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span className="material-icons">shopping_cart</span>[{allCart}]</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
