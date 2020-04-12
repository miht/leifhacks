import React, {useState} from 'react';
import ProjectsPane from './projectspane';

//Project Images
import pImage2 from '../images/Project2.png';
import pImage3 from '../images/Project3.png';

function ProjectDetailsPane(props) {

    const [index, setIndex]= useState(0);
    const [activeThumbnail, setSelectedThumbnail] = useState(props.projects[index].thumbnails[0]);
    
    function onProjectSelected(index) {
        setIndex(index);
        setSelectedThumbnail(props.projects[index].thumbnails[0]);
    }

    const selectedProject = props.projects[index];
    const thumbnails = selectedProject.thumbnails.map(image => {
        return <img onMouseOver={() => setSelectedThumbnail(image)} key={image} className="ProjectThumbnail" src={image}></img>;
    })
    return <div className="ProjectDetailsPane">
        <div className="ProjectDetailsView" style={{ ... { backgroundImage: `url(${activeThumbnail})` } }}>
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