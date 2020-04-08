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
            <p className="Introduction">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <br/>
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="ContentPane">
                <ImageButton src={kitchenImage} title="Work"></ImageButton>
                <ImageButton src={treehouseImage} title="Hobby"></ImageButton>
                <ImageButton src={livingRoomImage} title="Leisure"></ImageButton>
            </div>
            <p className="Introduction">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
        </div>
    );
}

export default Home;
