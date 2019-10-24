import React, { Component } from 'react'

export default class Item extends Component {
    onAddCart = (e, id) => {
        e.preventDefault()
        this.props.onAddCart(id)
        // console.log(id)
    }
    render() {
        // console.log(this.props.status)
        var { link, name, status, price, id } = this.props.item;
        return (
            <div className="col-sm-6 col-md-6 col-lg-4 ftco-animate fadeInUp ftco-animated">
                <div className="product">
                    <a href="/" className="img-prod"><img className="img-fluid" src={link} alt="Colorlib Template" />
                        <span className="status">{status}%</span>
                        <div className="overlay" />
                    </a>
                    <div className="text py-3 px-3">
                        <h3><a href="/">{name}</a></h3>
                        <div className="d-flex">
                            <div className="pricing">
                                <p className="price"><span className="mr-2 price-dc">{price}.00$</span><span className="price-sale">{price*(100-status)/100}.00$</span></p>
                            </div>
                            <div className="rating">
                                <p className="text-right">
                                    <a href="/"><span className="ion-ios-star-outline" /></a>
                                    <a href="/"><span className="ion-ios-star-outline" /></a>
                                    <a href="/"><span className="ion-ios-star-outline" /></a>
                                    <a href="/"><span className="ion-ios-star-outline" /></a>
                                    <a href="/"><span className="ion-ios-star-outline" /></a>
                                </p>
                            </div>
                        </div>
                        <p className="bottom-area d-flex px-3">
                            <a href="/" className="add-to-cart text-center py-2 mr-1" onClick={(event) => this.onAddCart(event, id)} ><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                            <a href="/" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
