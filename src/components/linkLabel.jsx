import React from 'react';
import '../views/Home.css';

function LinkLabel(props) {
    return <div className="LinkLabel">
        <img src={props.src}/>
        <p className="ContactSectionLabel">{props.content}</p>
    </div>;
}

export default LinkLabel;