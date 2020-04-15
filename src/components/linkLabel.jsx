import React from 'react';
import { Link } from 'react-router-dom';
import '../views/home.css';

function LinkLabel(props) {
    return <div className="LinkLabel">
        <img src={props.src}/>
        <a href={props.to} className="ContactSectionLabel">{props.content}</a>
    </div>;
}

export default LinkLabel;