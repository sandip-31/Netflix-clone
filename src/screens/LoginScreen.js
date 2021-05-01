import React, { useState } from 'react';
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {

        const [signIn, setSignIn] = useState(false)


    return (
     <div className="loginScreen">

        <div className="loginScreen__Background">
            <img className="loginScreen__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>

            <button onClick={() => setSignIn(true)}
             className="loginScreen__btn">Sign In</button>

            <div className="loginScreen__gradient"/>
            <div className="loginScreen__body">
                {signIn ?(<SignupScreen/>):(
                <>
                    <h1>unlimited films, TV programs and more.</h1>
                    <h2>Watch anywher, Cancel at ant time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="loginScreen__input">
                        <form >
                            <input type="email" placeholder="Email Adress"/>
                            <button onClick={()=> setSignIn(true)} className="loginScreen__getStarted">
                                GET STARTED
                            </button>
                        </form>
                    </div>

                </>
                )}
            </div>

        </div>
            
     </div>
    )
}

export default LoginScreen
