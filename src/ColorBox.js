import React, { Component } from 'react';
import './ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            copied: false,
        };
    }
    
    render() {
        const {name, background} = this.props;
        return (
            <CopyToClipboard text={background}>
                <div style={ {background: background} } className="ColorBox">
                    <div className="copy-container"></div>
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;