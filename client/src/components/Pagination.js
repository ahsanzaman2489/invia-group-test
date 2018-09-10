import React from 'react';
import {Link} from 'react-router-dom';
import {stringify} from 'query-string';


class Pagination extends React.Component {


    renderPagination = (options, path, query) => {
        const {linkHandler} = this.props;

        let length = 1;
        const list = [];

        if (options.count % options.iPP == 0) length = options.count / options.iPP;
        if (options.count % options.iPP != 0) length = parseInt(options.count % options.iPP) + 1;
        if (options.iPP > options.count) length = 1;


        for (let i = 1; i <= length; i++) {
            list.push(<li className={i == options.page ? 'active' : ''} key={i}
                          onClick={() => linkHandler(path, i, query)}><span>{i}<span
                className="sr-only">
                (current)</span></span>
            </li>)
        }

        return list;

    }

    render() {

        const {options, path, query, linkHandler} = this.props;
        return (
            <nav className="col-md-12">
                <ul className="pagination">
                    <li className={options.previousPage == null ? "disabled" : ""}
                        onClick={() => linkHandler(path, options.previousPage, query)}>
                          <span>
                            <span aria-hidden="true">&laquo;</span>
                          </span>
                    </li>
                    {this.renderPagination(options, path, query)}
                    <li className={options.nextPage == null ? "disabled" : ""}
                        onClick={() => linkHandler(path, options.nextPage, query)}>
                        {/*<Link to={this.createLink(path, {page: options.nextPage}, query)}>*/}
                        <span aria-hidden="true">&raquo;</span>
                        {/*</Link>*/}
                    </li>
                </ul>
                <p>showing {options.iPP > options.count ? options.count : options.iPP * options.page} out
                    of {options.count}</p>
            </nav>
        )
    }


}

export default Pagination;
