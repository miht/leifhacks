import React from 'react';

function SkillsPane (props) {

    const skillItems = props.skills.map((skill) => {
        return <p className="SkillItem" key={skill} p>
        {skill}
        </p>;
    });

    return <div className="SkillsPane">
        {skillItems}
    </div>;
}

export default SkillsPane;