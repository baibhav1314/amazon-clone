import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "../css/Login.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        //firebase stuff
    };

    const register = (e) => {
        e.preventDefault();

        // auth.createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         console.log(auth);
        //     })
        //     .catch((error) => alert(error.message));
        // //some fancy firebase stuff
    };
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="login__signInButton"
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions
                    of Use & Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">
                    Create your Amazon Button
                </button>
            </div>
        </div>
    );
}

export default Login;
