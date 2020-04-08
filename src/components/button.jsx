import React from 'react';
import './components.css';

class Button extends React.Component {
    render() {
        return <button className="Button">{this.props.title}</button>;
    }
}

export default Button;