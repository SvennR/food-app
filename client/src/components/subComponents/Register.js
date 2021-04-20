import React from 'react';
//import ReactDOM from 'react-dom';

function Register() {
    return(
        <div className="grid-item">
            <form action="" method="">
                <h3 className="register-header-text">Registrer</h3>
                <fieldset id="register-field"> 
                    <label className="usrname">Brukernavn</label>
                    <input type="text" name="uid"></input>
                    <br></br>
                    <label className="emailreg">Email</label>
                    <input type="email" name="email" placeholder="name@mail.com"></input>
                    <br></br>
                    <label className="passwdReg">Passord</label>
                    <input type="password" name="passwd"></input>
                    <br></br>
                    <label className="passwdReg">Gjenta Passord</label>
                    <input type="password" name="passwd-repeat"></input>
                    <br></br>
                    <button name="signup-submit" className="reg-button" type="submit" >Registrer</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Register