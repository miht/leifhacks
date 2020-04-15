import React from 'react';
import { Divider } from './components';
import LinkLabel from './linkLabel';
//Images
import artstationIcon from '../images/artstation-logo.png';
import linkedinIcon from '../images/linkedin-logo.png';
import githubIcon from '../images/github-logo.png';
import buyMeACoffeeIcon from '../images/buymeacoffee.png';

const artStationUrl = 'https://artstation.com/dlshs';
const linkedInUrl = 'https://linkedin.com/in/leiftysellsundkvist';
const githubUrl = 'https://github.com/miht';
function ContactPane(props) {
    return (<div className="ContactPane">
        <Divider />
        <div className="ContactLayout">
            <div className="ContactSectionPane">
                <p className="ContactSectionTitle"> Get in touch </p>
                <p className="ContactSectionLabel">+46 760-819168</p>
                <p className="ContactSectionLabel">leif.t.sundkvist@gmail.com</p>
            </div>

            <div className="ContactSectionPane">
                <p className="ContactSectionTitle"> Look deeper </p>
                <LinkLabel to={artStationUrl} src={artstationIcon} content="ArtStation"></LinkLabel>
                <LinkLabel to={linkedInUrl} src={linkedinIcon} content="LinkedIn"></LinkLabel>
                <LinkLabel to={githubUrl} src={githubIcon} content="GitHub"></LinkLabel>
                <button className="BuyMeACoffeeButton" style={{ ... { backgroundImage: `url(${buyMeACoffeeIcon})` } }}
                    onClick={() => window.open('https://www.buymeacoffee.com/DOXnKhm')}
                />
            </div>
        </div>
    </div>);
}

export default ContactPane;