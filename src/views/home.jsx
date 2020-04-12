import React from 'react';
import './Home.css';
import Button from '../components/button';
import ImageButton from '../components/imageButton';
import HexagonalPanel from '../components/hexagonalpanel';
import LinkLabel from '../components/linkLabel';
import ProjectsPane from '../components/projectspane';
import ProjectDetailsPane from '../components/projectDetailsPane';
import SkillsPane from '../components/skillspane';
import ReferencesPane from '../components/referencespane';
import { Divider } from '../components/components';


//Images
import logo from '../images/Leifhacks_Logo.png';
import artstationIcon from '../images/artstation-logo.png';
import linkedinIcon from '../images/linkedin-logo.png';
import githubIcon from '../images/github-logo.png';
import buyMeACoffeeIcon from '../images/buymeacoffee.png';

//Profile image
import profileImage from '../images/profileImage.png';
import signature from '../images/signature.png';

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
import pImageCodenameRagnarok from '../images/Project_CodenameRagnarok.png';
import pImageEarth from '../images/project_Earth.png';


//Reference images
import rImagePlaceholder from '../images/reference_Placeholder.png';


const projects = [
    {   
        title: "Guardian Symphony", tag: "Unity/Blender", src: pImageGuardianSymphony, 
        date: "2015",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        thumbnails: [pImageGuardianSymphony, pImage2, pImage3],
    },
        
        {
        title: "Ouija", tag: "Node.js/Blender", src: pImageOuija,
        date: "2019",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
            , thumbnails: [pImageOuija, pImage2, pImage3],
    },
    { 
        title: "Global Game Jam 2019", tag: "Unity/Blender", src: pImageGGJ,
        date: "2019",
        description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        ,
        thumbnails: [pImageGGJ, pImage2, pImage3],
    },
    {
        title: "Master Thesis - Fur", tag: "Unreal Engine", src: pImageThesis,
        date: "2019",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        , thumbnails: [pImageThesis, pImage2, pImage3],
    },
    {
        title: "Wish2Go", tag: "React Native/GraphQL", src: pImage1,
        date: "2020",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        ,
        thumbnails: [pImage1, pImage2, pImage3],
    },
    {
        title: "Concept Art", tag: "Art", src: pImageLeif,
        date: "2014-Today",
        description: " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
        ,
        thumbnails: [pImageLeif, pImage2, pImage3],
    },
    {
        title: "Graphics Engine", tag: "Qt/C++", src: pImageHelios,
        date: "2018",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        ,
        thumbnails: [pImageHelios, pImage2, pImage3],
    },
    {  title: "Store", tag: "Unity/Blender", src: pImageStore,
        date: "2020-Ongoing",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        thumbnails: [pImageStore, pImage2, pImage3],
    },
    {
        title: "Rube Goldberg", tag: "Unity/Blender", src: pImageRubeGoldberg,
        date: "2016",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", 
        thumbnails: [pImageRubeGoldberg, pImage2, pImage3],
    },
    {
        title: "Codename Ragnarok", tag: "Unity/Blender", src: pImageCodenameRagnarok,
        date: "On hold",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        ,
        thumbnails: [pImageCodenameRagnarok, pImage2, pImage3],
    },
    {
        title: "Earth", tag: "Blender", src: pImageEarth,
        date: "2018",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
        , thumbnails: [pImageEarth, pImage2, pImage3],
    },
];

const skills = [
    "Javascript",
    "Node.js",
    "React Native",
    "C/C#/C++",
    "Python",
    "Clojure",
    "Java",
    "Git",
    "Swift",
    "WebGL",
    "MongoDB",
    "GraphQL",
    "PostgreSQL",
    "GLSL/HLSL",
    "Perl"
];

const tools = [
    "Unity",
    "Blender",
    "Visual Studio",
    "Unreal Engine",
    "Qt Creator",
    "Photoshop",
    "Android Studio",
    "Krita"
];

const references = [
    {   name: "Angelina Von Gegerfelt, my mentor at Valtech", 
        quote:`I mentored and managed Leif at Valtech, and he was a great developer and colleague. Leif showed great diversity in his skills, but also a willingness to dig deep when working with something and learn it thoroughly. Frontend or backend, doesn't matter; Leif will create good code independently on where in the stack it is. He was quick to help anyone who needed, and shared his knowledge as often as he could.`,
        src: rImagePlaceholder,
    },
    {
        name: "Hedvig Reuterswärd, former colleague at Digpro",
        quote: `Leif is a former colleague of mine that I would take the oppertunity to work with again.He is a an exceptional team member who not only gives support to others but also excels in whatever he takes on - whether it is software development, game design or 3d modelling.Leif is not only competent in one area but always shown himself adept in many areas.Never ceasing to learn new skills, he is an outstanding hard worker with an eye for detail that would be an asset for any team.Leif is naturally gifted with an understanding for development and design in all its shapes.`,
        src: rImagePlaceholder,},
    {
        name: "Name Namesson",
        quote: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
        src: rImagePlaceholder,},
    {
        name: "Name Namesson",
        quote: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.,`,
        src: rImagePlaceholder,}
];

function Home() {
    return (
        <div className="Home">
            <div className="TitlePane">
                <img src={logo} alt="Logo" className="Logo"></img>
                <p className="Subtitle">Doing what I like best</p>
            </div>
            <div className="ContentPane">
                <div className="Introduction">
                    <img className="ProfilePicture" src={profileImage}/>
                    <div>
                        <p>
                        Hi, and thanks for stopping by!
                        </p>
                        <p>
                            Learn more about me by reading about my projects.
                            You'll find my contact details at the bottom of the page.
                        </p>
                        <p>Enjoy!</p>

                        <img className="Signature" src={signature} />
                        <p>Leif T. Sundkvist</p>
                    </div>    
                </div>
                <p className="Header">FOREWORD</p>
                <p className="Paragraph">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>

                <HexagonalPanel/>

                <p className="Header">PROJECTS</p>
                <Divider/>
                <ProjectDetailsPane projects={projects}>
                </ProjectDetailsPane>
                <Divider />
                <p className="Header">SKILLS</p>
                <SkillsPane skills={skills}/>

                <p className="Header">TOOLS</p>
                <SkillsPane skills={tools} />

                <p className="Header">REFERENCES</p>
                <ReferencesPane references={references}/>
            
            
            
            </div>
            


            <div className="ContactPane">


                <div className="ContactSectionPane">
                    <p className="ContactSectionTitle"> Get in touch </p>
                    <p className="ContactSectionLabel">+46 ____ ____ ____</p>
                    <p className="ContactSectionLabel">leif.t.sundkvist@gmail.com</p>
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
