import React, {useState} from 'react';
import ProjectsPane from './projectspane';
import ReferencesPane from '../components/referencespane';
import SkillsPane from './skillspane';
import '../views/projects.css';
import { Divider } from '../components/components';

//Project Images
import pImage2 from '../images/Project2.png';
import pImage3 from '../images/Project3.png';
import { PageHeader } from './components';

function ProjectDetailsPane(props) {

    const [index, setIndex]= useState(0);
    const [activeThumbnail, setSelectedThumbnail] = useState(props.projects[index].thumbnails[0]);
    
    function onProjectSelected(index) {
        setIndex(index);
        props.onProjectSelected(props.projects[index].color);
        setSelectedThumbnail(props.projects[index].thumbnails[0]);
    }

    const selectedProject = props.projects[index];
    const thumbnails = selectedProject.thumbnails.map(image => {
        return <img onMouseOver={() => setSelectedThumbnail(image)} key={image} className="ProjectThumbnail" src={image}></img>;
    });
    return <div className="ProjectDetailsPane">
        <ProjectsPane projects={props.projects} onClick={index => onProjectSelected(index)}>
        </ProjectsPane>
        <div className="ProjectDetailsView">
            <div className="ProjectImage" style={{ ... { backgroundImage: `url(${activeThumbnail})` } }}>
            </div>
            <div className="ProjectThumbnailList">
                {thumbnails}
            </div>
            <p className="ProjectTitle">{selectedProject.title}</p>
            <p className="ProjectDate">{selectedProject.date}</p>
            <p className="ProjectDescription">{selectedProject.description}</p>
        </div>

        <Divider vertical={true}/>

        <div className="SideBar">
            <SkillsPane title="Skills" skills={props.skills}></SkillsPane>
            <SkillsPane title="Technologies" skills={props.tools}></SkillsPane>
            <ReferencesPane references={props.references}/>
        </div>

    </div>;
}

export default ProjectDetailsPane;