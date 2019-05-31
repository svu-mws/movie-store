import React, {Component} from 'react';

class BreadCrumb extends Component {
    render() {
        return (
            <div id="breadcrumb" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">All Categories</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Headphones</a></li>
                                <li className="active">Product name goes here</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default BreadCrumb;
