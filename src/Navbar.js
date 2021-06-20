import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: true
        };

        this.handleChangeFormat = this.handleChangeFormat.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    closeSnackbar() {
        this.setState({open: false});
    }

    handleChangeFormat(e) {
        this.setState({ format: e.target.value });
        this.props.handleChangeFormat(e.target.value)
    }

    render() {
        const { level, handleChangeLevel, handleChangeFormat } = this.props;
        const { format } = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href='#'>react-palette</a>
                </div>
                <div className="slider-container">
                    <span>Level: { level }</span>
                    <div className="slider">
                        <Slider 
                            defaultValue={ level } 
                            min={100} 
                            max={900}
                            step={100}
                            onAfterChange={ handleChangeLevel }
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={ this.handleChangeFormat }>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.closeSnackbar}
                    message={<span id="message-id">Format Changed</span>}
                    ContentProps={{
                        "aria-describedby": 'message-id'
                    }}
                    action={[<IconButton color="inherit" key='close' aria-label='close'>
                                <CloseIcon onClick={this.closeSnackbar}/>
                            </IconButton>]}
                />
            </header>
        );
    }
}

export default Navbar;