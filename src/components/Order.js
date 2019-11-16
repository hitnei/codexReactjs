import React, { Component } from 'react'
import Item from './Item'

export default class Order extends Component {
    onReset = (e) => {
        this.props.onReset()
    }
    render() {
        var showItem = this.props.setItem.map((val, index) => {
            if (this.props.categoryCurrent === 0){
                return (
                    <Item key={val.id} item = {val} changeDetail={this.props.changeDetail} onSendRate={this.props.onSendRate} onAddCart={this.props.onAddCart}/>
                )
            }
            else{
                return(
                (val.category === this.props.categoryCurrent)? <Item key={val.id} item = {val} changeDetail={this.props.changeDetail} onAddCart={this.props.onAddCart}/> : <div key={val.id}></div>
                )
            }
        })
        return (
            <div>
                <div className="row">
                    {showItem}
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <div className="block-27">
                            {/* <ul>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">2</a></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">3</a></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">4</a></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">5</a></li>
                                <li><a href="https://colorlib.com/preview/theme/winkel/shop.html#">&gt;</a></li>
                            </ul> */}
                            <button onClick={this.onReset} type="button" className="btn btn-primary">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
