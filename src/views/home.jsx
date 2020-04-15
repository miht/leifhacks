import React, {useState} from 'react';
import './home.css';
import HexagonalPanel from '../components/hexagonalpanel';
import NavigationBar from '../components/navigationBar';


//Profile image
import profileImage from '../images/profileImage.png';
import signature from '../images/signature.png';
import ContactPane from '../components/contactPane';
import { Span } from '../components/components';

function Home() {
        return (
            <div className="Home">
                <NavigationBar title="Home" />
                <div className="ContentPane">
                    <div className="Introduction">
                        <img className="ProfilePicture" src={profileImage}/>
                        <div>
                            <p>
                            Hi, and thanks for stopping by!
                            <br/>
                            <br/>
                            This site is currently under construction, but you can
                            learn bits about me by reading about my projects.
                            You'll find my contact details at the bottom of each page.
                            </p>
                            <p>Enjoy!</p>
    
                            <img className="Signature" src={signature} />
                            <p>Leif T. Sundkvist</p>
                        </div>    
                    </div>
                    {/* <p className="Header">FOREWORD</p>
                    <p className="Paragraph">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p> */}
    
                    <HexagonalPanel/>
                </div>
                <ContactPane/>
            </div>
        );
}

export default Home;
