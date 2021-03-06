import "./listecomposant.css";
import { Link, useParams,useNavigate } from 'react-router-dom'

import React, { useContext, useState,useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';
import axios from 'axios'
import {toast} from "react-toastify";

export default function RegisterVerifiy(){

   

    const history = useNavigate();

       const [otp,setotp] = useState("");
 

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("BEFORE FETCH - CHECK");

        /*const res = await fetch("http://localhost:3000/users/verify-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp
            })
        });*/
        const userId = localStorage.getItem("user_id");
        console.log(userId,otp)
        const res = await axios.post("http://localhost:3000/users/verify-email",{userId,otp});

       
        
        
   if(res.status === 400){
            toast.error("An Error has occured.");
        

    } else
        {
            //localStorage.removeItem("user_id");
            console.log("ENTRER THE ELSE. - CHECK")
            history("/addinfo")
            toast.success("Your account has been registered successfully . You can now Sign in");
           
        }

       //toast.success("");



    }

    return(
        <React.Fragment>
            <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-primary bg-soft">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Free Register</h5>
                                            <p>Get your free Afar account now.</p>
                                        </div>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <img src="assets/images/profile-img.png" alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div>
                                    <a href="index.html">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/loogo.png" alt="" class="rounded-circle" height="34"/>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div class="p-2">
                                <form class="form-horizontal" onSubmit={handleSubmit}>
        
        <div class="mb-3">
            <label htmlFor="otp" class="form-label">Enter your verification code here  </label>
            <input type="text" required value={otp}class="form-control" id="email" placeholder="Enter Code" onChange={(e)=>setotp(e.target.value)}/>
        </div>
        

       
        
        <div class="mt-3 d-grid">
            <button class="btn btn-primary waves-effect waves-light" type="submit">Confirm</button>
        </div>

        <div class="mt-4 text-center">
            <h5 class="font-size-14 mb-3">Sign in with</h5>

            <ul class="list-inline">
                <li class="list-inline-item">
                    <a href="javascript::void()" class="social-list-item bg-primary text-white border-primary">
                        <i class="mdi mdi-facebook"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript::void()" class="social-list-item bg-info text-white border-info">
                        <i class="mdi mdi-twitter"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="javascript::void()" class="social-list-item bg-danger text-white border-danger">
                        <i class="mdi mdi-google"></i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="mt-4 text-center">
            <a href="auth-recoverpw.html" class="text-muted"><i class="mdi mdi-lock me-1"></i> Forgot your password?</a>
        </div>
    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            
                            <div>
                            <span>Already have an account ? <Link to = "/"> Sign in now </Link> </span>
                                <p>?? 2022 AFAR. Crafted with <i class="mdi mdi-heart text-danger"></i> by SKOLLS</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
}