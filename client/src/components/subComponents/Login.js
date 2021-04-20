import React from 'react';

function Login() {
    
    return (
        <div className="grid-item">
            <form action="" method="">
                <h3 className="login-header-text">Logg inn</h3>
                <fieldset id="login-field">
                    <label className="emailLogin" >E-mail</label>
                    <input type='email' name='mailuid' className='email-input' placeholder='name@mail.com'></input>
                    <label className="passwdLogin">Passord</label>
                    <input type='password' name='pwd' className='passwd-input'></input>
                    <button type="submit" name="login-submit" className="login-button">Logg inn</button>
                </fieldset>
            </form>
        </div>  
    )
}

export default Login