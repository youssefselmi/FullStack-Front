import "./listecomposant.css";
import { Link, useParams,useNavigate } from 'react-router-dom'

import React, { useContext, useState,useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

import {toast} from "react-toastify";
import Header from '../pages/Header';


const AjoutBesoin = () => {



    const { udata, setUdata } = useContext(adddata);

    const history = useNavigate();

    const [inpval, setINP] = useState({
        Name: "",
        Email: "",
        Besoinrecherche: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();



        const { Name,Email,Besoinrecherche } = inpval;

   
        const res = await fetch("https://fullstack-back-app.herokuapp.com/besoin/addbesoin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name,Email,Besoinrecherche
            })
        });





        const data = await res.json();
        console.log(data);


        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            history("/afficher")
            toast.success("Votre Besoin est enregistré! Attendez notre Reponse");
        }




    }


















    return(
        <div>



                
<div class="vertical-menu">

<div data-simplebar class="h-100">

    
    <div id="sidebar-menu">
       
        <ul class="metismenu list-unstyled" id="side-menu">
        <li class="menu-title" key="t-apps">Menu</li>
         <li>
                <a href="myproducts" class="waves-effect">
                    <i class="bx bx-user"></i>
                    <span key="t-chat">MY ITEMS</span>
                </a>
            </li>
        <li>
                <a href="addComposant" class="waves-effect">
                    <i class="bx bx-file"></i>
                    
                    <span key="t-file-manager">Broken Piece</span>
                </a>
            </li>

            

            <li>
                <a href="afficher" class="waves-effect">
                    <i class="bx bx-chat"></i>
                    <span key="t-chat">BROKEN ITEMS</span>
                </a>
            </li>
            

            

           
           
            <li>
                <a href="Home" class="waves-effect">
                    <i class="bx bx-band-aid"></i>
                    <span key="t-chat">SELL ITEMS</span>
                </a>
            </li>
            <li>
                <a href="affichage" class="waves-effect">
                    <i class="bx bx-chat"></i>
                    <span key="t-chat">NEW ITEMS</span>
                </a>
            </li>

           
            <li>
                <a href="list" class="waves-effect">
                    <i class="bx bx-car"></i>
                    <span key="t-chat">Delivery</span>
                </a>
            </li>
            <li>
                <a href="listService" class="waves-effect">
                    <i class="bx bx-book"></i>
                    <span key="t-chat"> Services</span>
                </a>
            </li>

                                        

        </ul>
    </div>
 
</div>
</div>







            <div id="layout-wrapper">





            <Header/>






















                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">


                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18 text-center">Exprimer Votre Besoin Ici</h4>
                                    </div>
                                </div>
                            </div>







                            <div class="row">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                                <Link to={`/afficher`}>

                                                    <button  type="button" className="btn btn-danger btn-block waves-effect waves-light rog "
                                                             data-bs-toggle="modal" data-bs-target="#composemodal">
                                                        Voir Les Postes
                                                    </button>
                                                </Link>   


                                                        <Link to={`/listebesoins`}>

                                                    <button  type="button" className="btn btn-danger btn-block waves-effect waves-light rog "
                                                             data-bs-toggle="modal" data-bs-target="#composemodal">
                                                        Liste des Besoins
                                                    </button>
                                                </Link>              
                                                <h4 className="card-title">Exprimer Votre Besoin Ici</h4>














                                                <form className="mt-4">
                                                    <div className="row">
                                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputEmail1"
                                                                   className="form-label">Votre Nom</label>
                                                            <input type="text" value={inpval.Name} onChange={setdata}
                                                                   name="Name" className="form-control"
                                                                   id="exampleInputEmail1"
                                                                   placeholder="Tapez Vore Nom"
                                                                   aria-describedby="emailHelp"/>
                                                        </div>





                                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputEmail1"
                                                                   className="form-label">Votre Email</label>
                                                            <input type="text" value={inpval.Email} onChange={setdata}
                                                                   name="Email" className="form-control"
                                                                   id="exampleInputEmail1"
                                                                   placeholder="Saisir Votre Email "
                                                                   aria-describedby="emailHelp"/>
                                                        </div>




                                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputEmail1"
                                                                   className="form-label">Qu'est ce que vous Cherchez!</label>
                                                            <input type="text" value={inpval.Besoinrecherche} onChange={setdata}
                                                                   name="Besoinrecherche" className="form-control"
                                                                   id="exampleInputEmail1"
                                                                   placeholder="Qu'est ce que vous Cherchez! "
                                                                   aria-describedby="emailHelp"/>
                                                        </div>



                                                        <button type="submit" onClick={addinpdata}
                                                                className="btn btn-primary">Submit
                                                        </button>
                                                    </div>
                                                </form>



































                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <footer class="footer">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-6">
                                    <script>document.write(new Date().getFullYear())</script> © Skote.
                                </div>
                                <div class="col-sm-6">
                                    <div class="text-sm-end d-none d-sm-block">
                                        Design and Develop by Themesbrand
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>


            </div>












            <div class="right-bar">
                <div data-simplebar class="h-100">
                    <div class="rightbar-title d-flex align-items-center px-3 py-4">

                        <h5 class="m-0 me-2">Settings</h5>

                        <a href="#/" class="right-bar-toggle ms-auto">
                            <i class="mdi mdi-close noti-icon"></i>
                        </a>
                    </div>


                    <hr class="mt-0" />
                    <h6 class="text-center mb-0">Choose Layouts</h6>

                    <div class="p-4">
                        <div class="mb-2">
                            <img src="assets/images/layouts/layout-1.jpg" class="img-thumbnail" alt="layout images"/>
                        </div>

                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input theme-choice" type="checkbox" id="light-mode-switch" checked />
                            <label class="form-check-label" for="light-mode-switch">Light Mode</label>
                        </div>

                        <div class="mb-2">
                            <img src="assets/images/layouts/layout-2.jpg" class="img-thumbnail" alt="layout images"/>
                        </div>
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input theme-choice" type="checkbox" id="dark-mode-switch"/>
                            <label class="form-check-label" for="dark-mode-switch">Dark Mode</label>
                        </div>

                        <div class="mb-2">
                            <img src="assets/images/layouts/layout-3.jpg" class="img-thumbnail" alt="layout images"/>
                        </div>
                        <div class="form-check form-switch mb-3">
                            <input class="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
                            <label class="form-check-label" for="rtl-mode-switch">RTL Mode</label>
                        </div>

                        <div class="mb-2">
                            <img src="assets/images/layouts/layout-4.jpg" class="img-thumbnail" alt="layout images"/>
                        </div>
                        <div class="form-check form-switch mb-5">
                            <input class="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch"/>
                            <label class="form-check-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
                        </div>


                    </div>

                </div>
            </div>



            <div class="rightbar-overlay"></div>


            <script src="assets/libs/jquery/jquery.min.js"></script>
            <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/libs/metismenu/metisMenu.min.js"></script>
            <script src="assets/libs/simplebar/simplebar.min.js"></script>
            <script src="assets/libs/node-waves/waves.min.js"></script>

            <script src="assets/js/app.js"></script>
            <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
            <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
            <script src="assets/libs/jquery/jquery.min.js"></script>
            <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/libs/metismenu/metisMenu.min.js"></script>
            <script src="assets/libs/simplebar/simplebar.min.js"></script>
            <script src="assets/libs/node-waves/waves.min.js"></script>

            <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
            <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
            <script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
            <script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
            <script src="assets/libs/jszip/jszip.min.js"></script>
            <script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
            <script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
            <script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
            <script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
            <script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>

            <script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
            <script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

            <script src="assets/js/pages/datatables.init.js"></script>

            <script src="assets/js/app.js"></script>

            <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
            <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />

        </div>





    )




}



export default AjoutBesoin;