import React from 'react';
import './components.css';

//Images
import livingRoomImage from '../images/living_room.png';
import kitchenImage from '../images/kitchen.png';
import treehouseImage from '../images/treehouse.png';

function HexagonalPanel() {
    return <div className="HexagonalPanel">
        <HexagonalPanelCell title="Work" position={0} src={kitchenImage} />
        <HexagonalPanelCell title="Hobby" position={1} src={treehouseImage}/>
        <HexagonalPanelCell title="Leisure" position={2} src={livingRoomImage} />
    </div>;
}

export default HexagonalPanel;

const styles = {
    0: { left: '50%', top: '6.25%', transform: 'translate(-50%, 6.25%)'},     //top
    1: { left: '0%', bottom: '0%', transform: 'translate(0%, 0%)'},  //bottomleft
    2: { left: '100%', bottom: '0%', transform: 'translate(-100%, 0%)'}   //bottomright
};

function HexagonalPanelCell(props) {
    return <div className="HexagonalPanelCell" style={{... styles[props.position]}}>
        <div className="HexagonalButton" style={ { ... {backgroundImage: `url(${props.src})`} } }>
            <p className="HexagonalButtonLabel">{props.title}</p>
        </div>
    </div>
    ;
}