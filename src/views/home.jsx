import React from 'react';
import './Home.css';
import Button from '../components/button';
import ImageButton from '../components/imageButton';

//Images
import logo from '../images/Leifhacks_Logo.png';
import livingRoomImage from '../images/living_room.png';
import kitchenImage from '../images/kitchen.png';
import treehouseImage from '../images/treehouse.png';


function Home() {
    return (
        <div className="Home">
            <div className="TitlePane">
                <img src={logo} alt="Logo" className="Logo"></img>
                <p className="Subtitle">A brief overview of my work</p>
            </div>
            <div className="ContentPane">
                <ImageButton src={kitchenImage} title="Work"></ImageButton>
                <ImageButton src={treehouseImage} title="Hobby"></ImageButton>
                <ImageButton src={livingRoomImage} title="Leisure"></ImageButton>
            </div>
        </div>
    );
}

export default Home;
