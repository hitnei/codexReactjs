import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index';

class Pagination extends Component {
    onChangePage(e, ind) {
        e.preventDefault()
        var { list, itemPerPage } = this.props
        var listPerPage = list.slice(itemPerPage * (ind), itemPerPage * (ind+1))
        this.props.onChangeListPerPage([...listPerPage])
        this.props.changePage(ind)
    }
    firstPage(e) {
        e.preventDefault()
        this.onChangePage(e, 0)
    }
    previousPage(e) {
        e.preventDefault()
        var temp = this.props.page
        temp = temp === 1 ? temp : --temp
        this.onChangePage(e, --temp)
    }
    nextPage(e) {
        e.preventDefault()
        var { list, itemPerPage } = this.props
        var len = Math.ceil((list.length / itemPerPage))
        var temp = this.props.page
        temp = temp === len ? temp : ++temp
        this.onChangePage(e, --temp)
    }
    lastPage(e) {
        e.preventDefault()

        var { list, itemPerPage } = this.props
        var len = Math.ceil((list.length / itemPerPage))
        this.onChangePage(e, --len)
    }
    render() {
        var { itemPerPage, list, page } = this.props
        var listLen = list.length
        var len = Math.ceil((listLen / itemPerPage))

        var pageItem = list.map((val, ind) => {
            if (ind < len)
                return (
                    <li onClick={(e) => this.onChangePage(e, ind)} key={ind} className={page - 1 === ind ? "page-item active" : "page-item"}><a href="/" className="page-link">{ind + 1}</a></li>
                )
            return null;
        });
        pageItem = pageItem.filter((val, ind) => {
            return val !== null
        })

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination pagination-circle pg-blue d-flex justify-content-center mt-5">
                    <li onClick={(e) => this.firstPage(e)} className={page === 1 ? "page-item disabled" : "page-item"}><a href="/" className="page-link">First</a></li>
                    <li onClick={(e) => this.previousPage(e)} className={page === 1 ? "page-item disabled" : "page-item"}>
                        <a href="/" className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {pageItem}
                    <li onClick={(e) => this.nextPage(e)} className={page === len ? "page-item disabled" : "page-item"}>
                        <a href="/" className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                    <li onClick={(e) => this.lastPage(e)} className={page === len ? "page-item disabled" : "page-item"}><a href="/" className="page-link">Last</a></li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemPerPage: state.itemPerPage,
        list: state.list,
        page: state.page,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeListPerPage: ([...listPerPage]) => {
            dispatch(actions.changeListPerPage([...listPerPage]))
        },
        changePage: (ind) => {
            dispatch(actions.changePage(ind))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)