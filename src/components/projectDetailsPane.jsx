import React, {useState} from 'react';
import ProjectsPane from './projectspane';

//Project Images
import pImage1 from '../images/Project1.png';
import pImage2 from '../images/Project2.png';
import pImage3 from '../images/Project3.png';

function ProjectDetailsPane(props) {

    const [index, setIndex] = useState(0);
    
    function onProjectSelected(index) {
        setIndex(index);
    }

    const selectedProject = props.projects[index];
    const thumbnails = [pImage1, pImage2, pImage3].map(image => {
        return <img key={image} className="ProjectThumbnail" src={image}></img>;
    })
    return <div className="ProjectDetailsPane">
        <div className="ProjectDetailsView" style={{ ... { backgroundImage: `url(${selectedProject.src})` } }}>
            <p className="ProjectTitle">{selectedProject.title}</p>
            <p className="ProjectDate">{selectedProject.date}</p>
            <p className="ProjectDescription">{selectedProject.description}</p>
            <div className="ProjectThumbnailList">
                {thumbnails}
            </div>
        </div>
        <ProjectsPane projects={props.projects} onClick={index => onProjectSelected(index)}>
        </ProjectsPane>
    </div>;
}

export default ProjectDetailsPane;