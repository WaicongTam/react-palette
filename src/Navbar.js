import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href='/'>react-palette</a>
                </div>
            </header>
        );
    }
}

export default Navbar;