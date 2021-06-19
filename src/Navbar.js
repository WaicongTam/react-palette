import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

class Navbar extends Component {
    render() {
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href='#'>react-palette</a>
                </div>

                <div className="slider">
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>

            </header>
        );
    }
}

export default Navbar;