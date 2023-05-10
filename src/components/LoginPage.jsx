import React,{useState} from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import Login from "./Login"

export default function LoginPage(){
    const [alterne, setAlterne] = useState(true)

    return(
         <div className="wrapper isActive">
                {alterne ? 
                <Login setAlterne={setAlterne}/>
                :
                
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

                    <button className="btn" type="submit">Regsiter</button>

                    <div className="login__register">
                        <p>Already have an account ? 
                            <Link to="/" className="login__link" onClick={()=>{setAlterne(true)}}>Login</Link>
                        </p>
                    </div>

                </form>
            </div>}

            </div>
        
    )
}