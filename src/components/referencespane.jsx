import React from 'react';

function ReferencesPane(props) {


    const referenceItems = props.references.map((reference, index) => {
        const alignment = (index % 2 === 0) ? 'left' : 'right';
        const text = <div>
            <p style={{textAlign: alignment}}>
                <i>{`"${reference.quote}"`}</i>
            </p>
            <p style={{ textAlign: alignment=== 'left' ? 'right' : 'left' }}>
                {`-${reference.name}`}
            </p>
        </div>;
        if(alignment === 'left') {
            return <div className="ReferenceItem" key={index} >
                {text}
                <img src={reference.src}/>
            </div>;
        }
        else {
            return <div className="ReferenceItem" key={index} >
                <img src={reference.src} />
                {text}
            </div>;
        }
    });

    return <div className="ReferencesPane">
        {referenceItems}
    </div>;
}

export default ReferencesPane;