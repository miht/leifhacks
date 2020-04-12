
import React from 'react';

function ProjectsPane (props) {
    const projectItems = props.projects.map((item, index) => {
        return <ProjectItem key={item.projectId} project={item} onClick={() => props.onClick(index)} />;
    });

    return <div className="ProjectsPane">
        {projectItems}
    </div>;
}

function ProjectItem (props) {
    return <div className="ProjectItem" 
                onClick={props.onClick}
                style={{... { backgroundImage: `url(${props.project.src})`}}}>
        <div className="ProjectItemTitle">
            <p>{props.project.tag}</p>
        </div>
        <p className="ProjectItemTag">{props.project.title}</p>
    </div>;
}

export default ProjectsPane;