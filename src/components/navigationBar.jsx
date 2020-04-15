import React from 'react';
import '../components/components.css';
import {Link} from 'react-router-dom';
import {Divider, PageHeader, Span } from './components';
import LinkButton from '../components/button';
import logo from '../images/Leifhacks_Logo.png';

function NavigationBar(props) {

    return (<div className="PageBar">
        {/* <div className="TitlePane"> */}
            {/* <img src={logo} alt="Logo" className="Logo"></img> */}
            {/* <p className="Subtitle">Doing what I like best</p> */}
        {/* </div> */}
        <div className="NavigationBar">
            {/* <PageHeader title={props.title}/> */}
            <img src={logo} alt="Logo" className="Logo"></img>
            <PageHeader title={props.title} />
            <div className="NavigationButtonPanel">
                <LinkButton to="/" title="Home"></LinkButton>
                <LinkButton to="/projects" title="Projects"></LinkButton>
                <LinkButton to="/about" title="About me"></LinkButton>
            </div>
        </div>
        <Divider></Divider>
    </div>
    );
}

export default NavigationBar;