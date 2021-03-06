import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {

    renderLinks() {

        const list = [
            {
                page: "Booking",
                link: "/"
            }

        ];

        return list.map((item, index) => {
            return <li key={index}><Link to={item.link}>{item.page}</Link></li>
        });

    }

    render() {

        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">Flight booking</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">

                            {this.renderLinks()}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }


}

export default Header;
