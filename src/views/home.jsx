import React from 'react';
import './Home.css';
import Button from '../components/button';
import ImageButton from '../components/imageButton';
import HexagonalPanel from '../components/hexagonalpanel';
import LinkLabel from '../components/linkLabel';
import ProjectsPane from '../components/projectspane';

//Images
import logo from '../images/Leifhacks_Logo.png';
import artstationIcon from '../images/artstation-logo.png';
import linkedinIcon from '../images/linkedin-logo.png';
import githubIcon from '../images/github-logo.png';
import buyMeACoffeeIcon from '../images/buymeacoffee.png';
//Project Images
import pImage1 from '../images/Project1.png';
import pImage2 from '../images/Project2.png';
import pImage3 from '../images/Project3.png';
import pImageLeif from '../images/Project_Leif.png';
import pImageGGJ from '../images/Project_GGJ2019.png';
import pImageOuija from '../images/Project_Ouija.png';
import pImageThesis from '../images/Project_Thesis.png';
import pImageGuardianSymphony from '../images/Project_GuardianSymphony.png';
import pImageHelios from '../images/Project_Helios.png';
import pImageStore from '../images/Project_Store.png';
import pImageRubeGoldberg from '../images/Project_RubeGoldberg.png';


const projects = [
    { title: "Guardian Symphony", tag: "Unity/Blender", src: pImageGuardianSymphony },
    { title: "Ouija", tag: "Node.js/Blender", src: pImageOuija },
    { title: "Global Game Jam 2019", tag: "Unity/Blender", src: pImageGGJ  },
    { title: "Master Thesis - Fur", tag: "Unreal Engine", src: pImageThesis  },
    { title: "Wish2Go", tag: "React Native/GraphQL", src: pImage1  },
    { title: "Concept Art", tag: "Art", src: pImageLeif  },
    { title: "Graphics Engine", tag: "Qt/C++", src: pImageHelios  },
    { title: "Store", tag: "Unity/Blender", src: pImageStore  },
    { title: "Rube Goldberg", tag: "Unity/Blender", src: pImageRubeGoldberg  },
    { title: "Title", tag: "Tag", src: pImage2  },
    { title: "Title", tag: "Tag", src: pImage1  },
];

function Home() {
    return (
        <div className="Home">
            <div className="TitlePane">
                <img src={logo} alt="Logo" className="Logo"></img>
                <p className="Subtitle">A brief overview of my work</p>
            </div>
            <div className="ContentPane">
                <p className="Introduction">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <p className="Introduction">Keepum scrollum foria morum</p>
                <HexagonalPanel/>
                <p className="Introduction">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p className="Introduction">
                    Have a look at my projects
                </p>
            </div>

            
            <ProjectsPane projects={projects}>

            </ProjectsPane>

            <div className="ContactPane">


                <div className="ContactSectionPane">
                    <p className="ContactSectionTitle"> Get in touch </p>
                    <p className="ContactSectionLabel">+46 ____ ____ ____</p>
                    <p className="ContactSectionLabel">leif.t.sundkvist@gmail.com</p>
                </div>

                <div className="ContactSectionPane">
                    <p className="ContactSectionTitle"> References </p>
                </div>

                <div className="ContactSectionPane">
                    <p className="ContactSectionTitle"> Look deeper </p>
                    <LinkLabel src={artstationIcon} content="ArtStation"></LinkLabel>
                    <LinkLabel src={linkedinIcon} content="LinkedIn"></LinkLabel>
                    <LinkLabel src={githubIcon} content="GitHub"></LinkLabel>
                    <button className="BuyMeACoffeeButton" style={{ ... {backgroundImage: `url(${buyMeACoffeeIcon})`} }}
                        onClick={() => window.open('https://www.buymeacoffee.com/DOXnKhm')}
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;
