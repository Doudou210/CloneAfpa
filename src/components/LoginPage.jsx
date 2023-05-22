import React,{useState} from "react";
import "../css/LoginPage.css";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function LoginPage(){

    const [alterne, setAlterne] = useState(true);

    return(
        <div>
            
            <Header/>
                
            <div className="wrapper">


                {alterne ? 

                // Login party

                    <div className="form_box login">
                        <span>
                            <ion-icon className='icon__close' name="close-outline"></ion-icon>
                        </span>
                        <h2>Login</h2>
            
                        <form action="#">
                            <div className="input_box">
                                <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                                </span>
                                <input type="email" required/>
                                <label type="Email">Email</label>
                            </div>
            
                            <div className="input_box">
                                <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                                </span>
                                <input type="password" required/>
                                <label htmlFor="Password">Password</label>
                            </div>
            
                            <div className="remember_forgot">
                                <label><input className="check" type="checkbox"/>Remember me</label>
                                <Link to={"/"}>Forgot Password ?</Link>
                            </div>
            
                            <button className="btn" type="submit">Login</button>
            
                            <div className="login__register">
                                <p>Don't have an account ? 
                                <button className="register__link" onClick={()=>{setAlterne(false)}}>Register</button></p>
                            </div>
            
                        </form>
                    </div>
                
                :
                
                // Register party

                    <div className="form_box register">
                        <span>
                            <ion-icon className='icon__close' name="close-outline"></ion-icon>
                        </span>
                        <h2>Registration</h2>

                        <form action="#">
                            <div className="input_box">
                                <span className="icon">
                                <ion-icon name="person"></ion-icon>
                                </span>
                                <input type="name" required/>
                                <label type="Email">Username</label>
                            </div>
                            <div className="input_box">
                                <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                                </span>
                                <input type="email" required/>
                                <label type="Email">Email</label>
                            </div>

                            <div className="input_box">
                                <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                                </span>
                                <input type="password" required/>
                                <label htmlFor="Password">Password</label>
                            </div>

                            <div className="remember_forgot">
                                <label><input type="checkbox"/>
                                I agree to the terms & conditions</label>
                            </div>

                            <button className="btn" type="submit">Register</button>

                            <Link to={'/'}>a</Link>

                            <div className="login__register">
                                <p>Already have an account ? 
                                    <button className="login__link" onClick={()=>{setAlterne(true)}}>Login</button>
                                </p>
                            </div>

                        </form>

                    </div>
                }

            </div>
        </div>
        
    )
}