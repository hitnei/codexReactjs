import React, { Component } from 'react'

export default class Sidebar extends Component {
    // constructor(props){
    //     super(props);
    //     state = {
    //     }
    // }
    onHandleClick = (e, id) => {
        e.preventDefault()
        this.props.onReceiveType(id)
    }
    render() {
        var showType = this.props.categories.map((val, index) => {
            return(
                <li key={val.id} onClick={(event) => this.onHandleClick(event, val.id)}><a href="/">{val.category}</a></li>
            )
        })
        return (
            <div>
                <div className="sidebar-box-2">
                    <h2 className="heading mb-4"><a href="/">Clothing</a></h2>
                    <ul>
                        {showType}
                    </ul>
                </div>
                <div className="sidebar-box-2">
                    <h2 className="heading mb-4"><a href="/">Jeans</a></h2>
                    <ul>
                        <li><a href="/">Shirts &amp; Tops</a></li>
                        <li><a href="/">Dresses</a></li>
                        <li><a href="/">Shorts &amp; Skirts</a></li>
                        <li><a href="/">Jackets</a></li>
                        <li><a href="/">Coats</a></li>
                        <li><a href="/">Jeans</a></li>
                        <li><a href="/">Sleeveless</a></li>
                        <li><a href="/">Trousers</a></li>
                        <li><a href="/">Winter Coats</a></li>
                        <li><a href="/">Jumpsuits</a></li>
                    </ul>
                </div>
                <div className="sidebar-box-2">
                    <h2 className="heading mb-2"><a href="/">Bags</a></h2>
                    <h2 className="heading mb-2"><a href="/">Accessories</a></h2>
                </div>
                <div className="sidebar-box-2">
                    <h2 className="heading mb-4"><a href="/">Shoes</a></h2>
                    <ul>
                        <li><a href="/">Nike</a></li>
                        <li><a href="/">Addidas</a></li>
                        <li><a href="/">Skechers</a></li>
                        <li><a href="/">Jackets</a></li>
                        <li><a href="/">Coats</a></li>
                        <li><a href="/">Jeans</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
