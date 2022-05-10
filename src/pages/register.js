import "./listecomposant.css";
import { Link, useParams,useNavigate } from 'react-router-dom'

import React, { useContext, useState,useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';
import {axios} from 'axios'
import {toast} from "react-toastify";

export default function Register(){

   

    const history = useNavigate();

    
       const [firstName,setfirstName] = useState("");
       const [lastName,setlastName] = useState("");
       const [email,setEmail] = useState("");
       const [password,setPassword] = useState("");
       




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("BEFORE FETCH");
        const res = await fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,lastName,email,password
            })
        });

        console.log("AFTER FETCH");
        const data = await res.json();
        console.log(data);
        

       // localStorage.setItem("user_id", data.result._id);
      

   if(res.status === 400){
            toast.warn("Email is already in use.");
        

    } else
        {
            console.log("ENTRER THE ELSE.")
            history("/registerVerification")
            toast.success("Your account has been registered. You can now Sign in");
           
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
            <label htmlFor="email" class="form-label">E-mail</label>
            <input type="text" required value={email}class="form-control" id="email" placeholder="Enter e-mail" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label htmlFor="firstName" class="form-label">First name</label>
            <input type="text" required value={firstName}class="form-control" id="firstName" placeholder="Enter first name" onChange={(e)=>setfirstName(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label htmlFor="lastName" class="form-label">Last name</label>
            <input type="text" required value={lastName}class="form-control" id="lastName" placeholder="Enter last name" onChange={(e)=>setlastName(e.target.value)}/>
        </div>

        <div class="mb-3">
            <label htmlFor= "password" class="form-label">Password</label>
            <div class="input-group auth-pass-inputgroup">
                <input type="password" required id = "password" value = {password} onChange={(e)=> setPassword(e.target.value)} class="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon"/>
                <button class="btn btn-light " type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
            </div>
        </div>

       
        
        <div class="mt-3 d-grid">
            <button class="btn btn-primary waves-effect waves-light" type="submit">Sign Up</button>
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
                            <span>Already have an account ? <Link to = "/auth"> Sign in now </Link> </span>
                                <p>© 2022 AFAR. Crafted with <i class="mdi mdi-heart text-danger"></i> by SKOLLS</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
}