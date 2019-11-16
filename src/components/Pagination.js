import React, { Component } from 'react';

class Pagination extends Component {
    onChangePage(e, ind){
        e.preventDefault()
        this.props.onChangePage(ind+1)
    }
    firstPage(e){
        e.preventDefault()
        this.props.firstPage()
    }
    previousPage(e){
        e.preventDefault()
        this.props.previousPage()
    }
    nextPage(e){
        e.preventDefault()
        this.props.nextPage()
    }
    lastPage(e){
        e.preventDefault()
        this.props.lastPage()
    }
    render() {
        var {itemPerPage, listLen, list, page} = this.props
        var len = Math.ceil((listLen/itemPerPage))
        
        var pageItem = list.map((val, ind) => {
            if (ind<len)
                return (
                    <li onClick={(e) => this.onChangePage(e, ind)} key={ind} className= {page-1===ind? "page-item active" : "page-item"}><a href="/" className="page-link">{ind+1}</a></li>
                )
            return null;
        });
        pageItem = pageItem.filter((val, ind) => {
            return val !== null
        })
        
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination pagination-circle pg-blue d-flex justify-content-center mt-5">
                    <li onClick={(e) => this.firstPage(e)} className={page===1? "page-item disabled" : "page-item"}><a href="/" className="page-link">First</a></li>
                    <li onClick={(e) => this.previousPage(e)} className={page===1? "page-item disabled" : "page-item"}>
                        <a href="/" className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {pageItem}
                    <li onClick={(e) => this.nextPage(e)} className={page===len? "page-item disabled" : "page-item"}>
                        <a href="/" className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                    <li onClick={(e) => this.lastPage(e)} className={page===len? "page-item disabled" : "page-item"}><a href="/" className="page-link">Last</a></li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;