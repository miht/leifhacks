import React from 'react';
import './components.css';

//Images
import livingRoomImage from '../images/living_room.png';
import kitchenImage from '../images/kitchen.png';
import treehouseImage from '../images/treehouse.png';

function HexagonalPanel() {
    return <div className="HexagonalPanel">
        <HexagonalPanelCell position={0} src={kitchenImage} />
        <HexagonalPanelCell position={1} src={treehouseImage}/>
        <HexagonalPanelCell position={2} src={livingRoomImage} />
    </div>;
}

export default HexagonalPanel;

const styles = {
    0 :{left: '25%', top: '6%'},     //top
    1: { left: '0%', bottom: '0%' },  //bottomleft
    2: { right: '0%', bottom: '0%'}   //bottomright
};

function HexagonalPanelCell(props) {
    return <div className="HexagonalPanelCell" style={{... styles[props.position]}}>
            <img src={props.src} style={ { width: '125%'} }></img>
        </div>
    ;
}