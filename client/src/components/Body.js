import React from 'react';

//import './subComponents/Register'
//import './subComponents/Login'
import './subComponents/RgButton'
import './body.css'
//import Register from './subComponents/Register';
//import Login from './subComponents/Login';
import RgButton from './subComponents/RgButton';
import './subComponents/rgButton.css'
import AddRecipes from './subComponents/AddRecipes';
import Pics from './subComponents/Pics';

function Body() {
    return(
        <div>
            <div className="grid-container">
                {/*
                <Register />
                <Login />
                */}
            </div>
                <RgButton />
            <div className="grid-container2">
                <AddRecipes />
                <Pics />
            </div>
            
        </div>
    )
}

export default Body