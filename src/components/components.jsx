import React from 'react';
import './components.css';

function PageHeader(props) {
    return (
        <p className="PageHeader">{props.title}</p>
    );
}

function SectionHeader(props) {
    return (
        <p className="SectionHeader">{props.title}</p>
    );
}

function Divider(props) {
    return <div className={props.vertical? "VerticalDivider" : "Divider"}/>;
}

function Span() {
    return <div className="Span"/>;
}

function Button(props) {
    return (
    <div className="Button">
        <p>{props.title}</p>
    </div>
    );
}

export { PageHeader, Divider, Span, Button, SectionHeader};