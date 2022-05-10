import "./listecomposant.css";
import {useNavigate } from 'react-router-dom'

import React, {useState } from 'react'
import axios from 'axios'
import {toast} from "react-toastify";

export default function recoverPasswordVerify(){

   

    const history = useNavigate();

       const [otp,setotp] = useState("");
        const[email, setEmail] = useState("")
        const [newPassword,setNewPassword] = useState("")
 

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        /*const res = await fetch("http://localhost:3000/users/verify-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp
            })
        });*/
        
        const res = await axios.post("http://localhost:3000/users/PasswordRecoveryVerify",{email,newPassword,otp});

       
        
        
   if(res.status === 400){
            toast.error("An Error has occured.");
        

    } else
        {
            //localStorage.removeItem("user_id");
            console.log("ENTRER THE ELSE. - CHECK")
            history("/auth")
            toast.success("Your new password has been set.");
           
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
            <label htmlFor="otp" class="form-label">Enter your recovery code here  </label>
            <input type="text" required value={otp}class="form-control" id="otp" placeholder="Enter Code" onChange={(e)=>setotp(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label htmlFor="email" class="form-label">Enter your email here  </label>
            <input type="text" required value={email}class="form-control" id="email" placeholder="Enter Code" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label htmlFor="newPassword" class="form-label">Enter your new password here  </label>
            <input type="text" required value={newPassword}class="form-control" id="newPassword" placeholder="Enter new password" onChange={(e)=>setNewPassword(e.target.value)}/>
        </div>
        

       
        
        <div class="mt-3 d-grid">
            <button class="btn btn-primary waves-effect waves-light" type="submit">Confirm</button>
        </div>

    
    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            
                            <div>
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