
import React from 'react';

function ProjectsPane (props) {
    const projectItems = props.projects.map((item) => {
        return <ProjectItem key={item.projectId} project={item} />;
    });

    return <div className="ProjectsPane">
        {projectItems}
    </div>;
}

function ProjectItem (props) {
    return <div className="ProjectItem" style={{... { backgroundImage: `url(${props.project.src})`}}}>
        <div className="ProjectItemTitle">
            <p>{props.project.tag}</p>
        </div>
        <p className="ProjectItemTag">{props.project.title}</p>
    </div>;
}

export default ProjectsPane;