import React from 'react';
import './about.css';
import NavigationBar from '../components/navigationBar';
import ContactPane from '../components/contactPane';
import { Span } from '../components/components';

const underConstructionImage = require('../images/underConstruction.png');
function AboutPage(props) {
    return (
        <div className="About">
            <NavigationBar title="About" />
            <div className="AboutContentPane">
                <img src={underConstructionImage}/>
                <p className="BigLabel">Whoops!</p>
                <p className="BigParagraph">I haven't implemented this page yet. Check out my projects while I'm working on it!</p>
            </div>
            <ContactPane />
        </div>
    );
}

    export default AboutPage;