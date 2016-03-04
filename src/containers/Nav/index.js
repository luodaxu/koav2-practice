import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class Nav extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                {
                    this.props.children && React.cloneElement(this.props.children, {
                        name: 'luodaxu' // pass props to children
                    })
                }
                <Footer />
            </div>
        );
    }
}
