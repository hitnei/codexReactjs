import React, { Component } from 'react'

export default class Head extends Component {
    render() {
        return (
            <div>
                <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url("Winkel - Free Bootstrap 4 Template by Colorlib_files/bg_6.jpg")' }}>
                    <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                        <p className="breadcrumbs"><span className="mr-2"><a href="https://colorlib.com/preview/theme/winkel/index.html">Home</a></span> <span>Products</span></p>
                        <h1 className="mb-0 bread">Collection Products</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
