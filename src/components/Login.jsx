import React from "react";
import "../css/Login.css";

export default function Login(){
    return(
        <div className="wrapper isActive">
                <div className="form-box login">
                    <h2>Login</h2>
                <span class="material-symbols-outlined" onClick={`isClose`}>cancel</span>

                    <form action="#">
                        <div className="input_box">
                            <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                            </span>
                            <input className="tag" type="email" required/>
                            <label type="Email">Email</label>
                        </div>

                        <div className="input_box">
                            <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" required/>
                            <label htmlFor="Password">Password</label>
                        </div>

                        <div className="remenber-forgot">
                            <label><input type="checkbox"/>Remember me</label>
                            <a href="/">Forgot Password ?</a>
                        </div>

                        <button className="btn" type="submit">Login</button>

                        <div className="login__register">
                            <p>Don't have an account ? <a href="/" className="register__link">Register</a></p>
                        </div>

                    </form>
                </div>
            </div>
    )
}