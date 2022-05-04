import "./listecomposant.css";
import { Link, useParams,useNavigate } from 'react-router-dom'

import React, { useContext, useState,useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';
import axios from 'axios'
import {toast} from "react-toastify";

export default function additionalInfo(){

   

    const history = useNavigate();

    
       const [location,setLocation] = useState("");
       const [interests,setInterests] = useState("");
       const [profession,setProfession] = useState("");
       const [avatar, setAvatar] = useState("");
       //const [password,setPassword] = useState("");
       


        
       // interests = interests.split(/(\s+)/);

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*const userid = localStorage.getItem("user_id")
        console.log("BEFORE FETCH");
        const res = await fetch("http://localhost:3000/users/addinfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                profession,location,interests,avatar,userid
            })
        });
        */
        let  pathimage="assets/images/users/"+avatar.substr(12);
        
        const userid = localStorage.getItem("user_id")
    const res = await axios.post("https://fullstack-back-app.herokuapp.com/users/addinfo",{userid,avatar:pathimage,profession,location,interests});

        console.log("AFTER FETCH");
       
        

   if(res.status === 400){
            toast.warn("Problem has been encountered. please remain indoors.");
        

    } else
        {
            console.log("ENTRER THE ELSE.")
            history("/userProfile")
            toast.success("Your account has been registered You can now Sign in");
           
        }

   


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
                                            <h5 class="text-primary">Additional information is required </h5>
                                            <p>This is the last step, so we can better suit your needs</p>
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
                                <form class="form-horizontal" enctype="multipart/form-data" onSubmit={handleSubmit}>
        
        <div class="mb-3">
            <label htmlFor="profession" class="form-label">Your profession</label>
            <input type="text" required value={profession}class="form-control" id="profession" placeholder="Enter profession" onChange={(e)=>setProfession(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label htmlFor="location" class="form-label">Your location</label>
            <input type="text" required value={location}class="form-control" id="location" placeholder="Enter Location" onChange={(e)=>setLocation(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label htmlFor="interests" class="form-label">Your interests</label>
            <input type="text" required value={interests}class="form-control" id="interests" placeholder="Enter interests" onChange={(e)=>setInterests(e.target.value)}/>
        </div>

        <div class="mb-3">
            <label htmlFor= "avatar" class="form-label">Avatar  </label>
            <input
          type="file"
          id="avatar"
          required
          onChange={(e)=>setAvatar(e.target.value)}
          name="avatar"
        />
            
        </div>

       
        
        <div class="mt-3 d-grid">
            <button class="btn btn-primary waves-effect waves-light" type="submit">Confirm</button>
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