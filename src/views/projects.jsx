import React, { useState } from 'react';
import '../components/components.css';
import './projects.css';
import ProjectsPane from '../components/projectspane';
import ProjectDetailsPane from '../components/projectDetailsPane';
import { Divider } from '../components/components';
import NavigationBar from '../components/navigationBar';

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
import ReferencesPane from '../components/referencespane';

//Reference images
import rImagePlaceholder from '../images/reference_Placeholder.png';
import ContactPane from '../components/contactPane';

const references = [
    {
        name: "Angelina Von Gegerfelt, my mentor at Valtech",
        quote: `I mentored and managed Leif at Valtech, and he was a great developer and colleague. Leif showed great diversity in his skills, but also a willingness to dig deep when working with something and learn it thoroughly. Frontend or backend, doesn't matter; Leif will create good code independently on where in the stack it is. He was quick to help anyone who needed, and shared his knowledge as often as he could.`,
        src: rImagePlaceholder,
    },
    {
        name: "Hedvig Reuterswärd, former colleague at Digpro",
        quote: `Leif is a former colleague of mine that I would take the oppertunity to work with again.He is a an exceptional team member who not only gives support to others but also excels in whatever he takes on - whether it is software development, game design or 3d modelling.Leif is not only competent in one area but always shown himself adept in many areas.Never ceasing to learn new skills, he is an outstanding hard worker with an eye for detail that would be an asset for any team.Leif is naturally gifted with an understanding for development and design in all its shapes.`,
        src: rImagePlaceholder,
    }
];

const projects = [
    {
        title: "Guardian Symphony", tag: "Unity/Blender", src: pImageGuardianSymphony,
        date: "2015",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        thumbnails: [pImageGuardianSymphony, pImage2, pImage3],
        color: { r: 115, g: 194, b: 37 }
    },

    {
        title: "Ouija", tag: "Node.js/Blender", src: pImageOuija,
        date: "2019",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.", thumbnails: [pImageOuija, pImage2, pImage3],
        color: { r: 0, g: 15, b: 50 }
    },
    {
        title: "Global Game Jam 2019", tag: "Unity/Blender", src: pImageGGJ,
        date: "2019",
        description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        ,
        thumbnails: [pImageGGJ, pImage2, pImage3],
        color: { r: 150, g: 150, b: 179 }
    },
    {
        title: "Master Thesis - Fur", tag: "Unreal Engine", src: pImageThesis,
        date: "2019",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        , thumbnails: [pImageThesis, pImage2, pImage3],
        color: { r: 0, g: 0, b: 0 }
    },
    {
        title: "Wish2Go", tag: "React Native/GraphQL", src: pImage1,
        date: "2020",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        ,
        thumbnails: [pImage1, pImage2, pImage3],
        color: { r: 0, g: 125, b: 125 }
    },
    {
        title: "Concept Art", tag: "Art", src: pImageLeif,
        date: "2014-Today",
        description: " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
        ,
        thumbnails: [pImageLeif, pImage2, pImage3],
        color: { r: 50, g: 25, b: 25 }
    },
    {
        title: "Graphics Engine", tag: "Qt/C++", src: pImageHelios,
        date: "2018",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        ,
        thumbnails: [pImageHelios, pImage2, pImage3],
        color: { r: 241, g: 147, b: 32 }
    },
    {
        title: "Store", tag: "Unity/Blender", src: pImageStore,
        date: "2020-Ongoing",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        thumbnails: [pImageStore, pImage2, pImage3],
        color: { r: 201, g: 62, b: 37 }
    },
    {
        title: "Rube Goldberg", tag: "Unity/Blender", src: pImageRubeGoldberg,
        date: "2016",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        thumbnails: [pImageRubeGoldberg, pImage2, pImage3],
        color: { r: 255, g: 15, b: 15 }
        },
    {
        title: "Codename Ragnarok", tag: "Unity/Blender", src: pImageCodenameRagnarok,
        date: "On hold",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        ,
        thumbnails: [pImageCodenameRagnarok, pImage2, pImage3],
        color: { r: 60, g: 125, b: 25 }
    },
    {
        title: "Earth", tag: "Blender", src: pImageEarth,
        date: "2018",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
        , thumbnails: [pImageEarth, pImage2, pImage3],
        color: { r: 21, g: 82, b: 150 }
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

function Projects(props) {
    const [backgroundColor, setBackgroundColor] = useState({ r: 81, g: 148, b: 194 });
    return <div className="Projects" style={{
                backgroundColor: `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, 1)`}}>
        <NavigationBar title="Projects"/>
        <ProjectDetailsPane 
        references={references} 
        projects={projects} 
        skills={skills}
        tools={tools}
        onProjectSelected={(col) => setBackgroundColor(col)}>
        </ProjectDetailsPane>
        <ContactPane/>
    </div>;
}

export default Projects;