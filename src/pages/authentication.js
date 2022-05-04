import "./listecomposant.css";
import { Link, useParams,useNavigate } from 'react-router-dom'

import React, { useContext, useState,useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';
import axios from 'axios'
import jwt_decode from "jwt-decode";
import {toast} from "react-toastify";
import { Token } from "@mui/icons-material";


const Authentication = ()=>{

    const [result,setResult] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const goTo = useNavigate();

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(localStorage.getItem(Token));

            //const credentials = [email,password];
            //console.log("credentials are : "+credentials);
           const response = await axios.post("https://fullstack-back-app.herokuapp.com/auth/login",{email,password});

       
  /*              
        const res = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        }); 
*/ console.log(response);
        
        if(response.status === 200){
           
             localStorage.setItem("token", response.data.token);
            const decoded =  jwt_decode(response.data.token);
            localStorage.setItem("EmailUser", decoded.email);
            localStorage.setItem("firstNameUser",response.data.result.firstName);
            localStorage.setItem("lastNameUser",response.data.result.lastName);
            localStorage.setItem("Role",response.data.result.roles);
            localStorage.setItem("user_id",response.data.result._id)
            localStorage.setItem("accountState",response.data.result.accountState);
            localStorage.setItem("verified",response.data.result.verified)
            localStorage.setItem("checkAuth",true);
            localStorage.setItem("additionalinfo",response.data.result.additionalInfo);
            //const additionalinfo = response.data.result.additionalInfo
            
           
            if(localStorage.getItem("Role") === "user" ){
                if(response.data.result.additionalInfo)
                goTo("/userProfile");
                else goTo("/addinfo");
                //else 
                  //  toast.error("Your account has been banned.");
                }
                
            else if (localStorage.getItem("Role") === "admin"){
                goTo("/dashboard");
            }           
        
        
            setResult(response.data.result);
            toast.success("Welcome to AFAR.");

             }else if(response.status === 404)
                 {
            toast.warn("Email is not registered");
                 }
    }

    
   return (
       
    <div class="account-pages my-5 pt-sm-5">
        
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-primary bg-soft">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Welcome Back !</h5>
                                            <p>Sign in to continue to AFAR.</p>
                                        </div>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <img src="assets/images/loogo.png" alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div class="auth-logo">
                                    <a href="index.html" class="auth-logo-light">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/logo-light.svg" alt="" class="rounded-circle" height="34"/>
                                            </span>
                                        </div>
                                    </a>

                                    <a href="index.html" class="auth-logo-dark">
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
                                            <label htmlFor="email" class="form-label">email</label>
                                            <input type="text" required value={email}class="form-control" id="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                
                                        <div class="mb-3">
                                            <label htmlFor= "password" class="form-label">Password</label>
                                            <div class="input-group auth-pass-inputgroup">
                                                <input type="password" required id = "password" value = {password} onChange={(e)=> setPassword(e.target.value)} class="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon"/>
                                                <button class="btn btn-light " type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                                            </div>
                                        </div>

                                       
                                        
                                        <div class="mt-3 d-grid">
                                            <button class="btn btn-primary waves-effect waves-light" type="submit" >Sign In</button>
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
                                        <span> <Link to = "/PasswordRecover"> Forgot your password ? </Link> </span>

                                            </div>
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            
                            <div>
                                <span>Don't have an account ? <Link to = "/register"> Sign up now </Link> </span>
                                <p>© 2022 AFAR. Crafted with <i class="mdi mdi-heart text-danger"></i> by SKOLLS</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Authentication;