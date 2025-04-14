// Purpose: TitleScreen component to render the homepage
import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function TitleScreen() {
    return (
        <div className="title-screen">
        <title>Title Screen</title>
        <h1 className="title">Welcome to the Game!</h1>
        <p className="description">This is the title screen of the game.</p>
        <Link to="/game" className="start-button">
            Start Game
        </Link>
        </div>
    );
    }