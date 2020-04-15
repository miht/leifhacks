import React from 'react';
import {Link} from 'react-router-dom';
import './components.css';

function LinkButton(props) {
    return <Link to={props.to} className="Button">{props.title}</Link>;
}

export default LinkButton;