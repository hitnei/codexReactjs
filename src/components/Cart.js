import React, { Component } from 'react'

export default class Cart extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         list: this.props.list
    //     }
    // }
    onChange (e, id) {
        // console.log(id)
        // console.log(e.target.value)
        var qua = e.target.value
        qua = qua!=0? Math.floor(qua) : qua
        qua = qua<0? 0 : qua
        this.props.onChangeCart(qua, id)
    }
    removeCart = (e, id) => {
        e.preventDefault()
        this.props.removeCart(id)
    }
    render(){
        var {list} = this.props
        // console.log(list)
        var showListCart = list.map((val, index) => {
            var total = val.quatity * val.price * (100 - val.status) / 100
            total = total.toFixed(2);
            if (val.isCart){
                return (
                    <tr key={index} className="text-center">
                    <td className="product-remove"  onClick={(event, id) => this.removeCart(event, val.id)}>
                        <a href="/"><span className="ion-ios-close"/></a>
                    </td>
                    <td className="image-prod">
                        <img className="img" alt={val.name} src={val.link}/>
                    </td>
                    <td className="product-name">
                        <h3>{val.name}</h3>
                        <p>Far far away, behind the word mountains, far from the countries</p>
                    </td>
                    <td className="price">{(val.price * (100 - val.status) / 100).toFixed(2)}$</td>
                    <td className="quantity">
                        <div className="input-group mb-3">
                            <input type="number" name="quantity" className="quantity form-control input-number" step={1} min={1} max={100} value={val.quatity} onChange={(e) => this.onChange(e, val.id)}/>
                        </div>
                    </td>
                    <td className="total">{total}$</td>
                    </tr>
                )
            }
            return null
        })
        return (
            <div className="row">
                <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                    <div className="cart-list">
                        <table className="table">
                            <thead className="thead-primary">
                                <tr className="text-center">
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showListCart}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
