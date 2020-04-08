import React from 'react';
import './components.css';

class ImageButton extends React.Component {

    render() {
        return <div className="ImageButton">
            <img src={this.props.src}></img>
            <button className="Button">{this.props.title}</button>
        </div>;
    }
}

export default ImageButton;