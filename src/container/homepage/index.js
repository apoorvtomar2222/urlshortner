import React, { Component } from 'react';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                        </ul>
                        <form className="navbar-form navbar-left" action="/action_page.php">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" name="search" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </nav>

            </div >
        );
    }

}