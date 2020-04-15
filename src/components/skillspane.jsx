import React from 'react';
import { SectionHeader } from './components';
import ProjectsPane from './projectspane';

function SkillsPane (props) {

    const skillItems = props.skills.map((skill) => {
        return <p className="SkillItem" key={skill} p>
        {skill}
        </p>;
    });

    return <div className="SkillsPane">
        <SectionHeader title={props.title}/>
        <div className="SkillsLayout">
            {skillItems}
        </div>
    </div>;
}

export default SkillsPane;