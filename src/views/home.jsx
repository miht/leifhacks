import React from 'react';
import './Home.css';
import logo from '../images/Leifhacks_Logo.jpg';

function Home() {
    return (
        <div className="Home">
            <img src={logo} alt="Logo" className="Logo"></img>
            <p>hello!</p>
        </div>
    );
}

export default Home;
