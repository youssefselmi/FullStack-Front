import React , {useState,useEffect,useContext} from "react";
import "./listecomposant.css";
import { Link, useParams,useNavigate } from 'react-router-dom'

import Axios from "axios";
import axios from "axios";
import {toast} from "react-toastify";
import Header from '../pages/Header';

import { updatedata } from './context/ContextProvider'

const EditComposant = () => {


    const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");

    const [inpval, setINP] = useState({
        Name: "",
        Etat: "",
        Marque: "",
        Description: "",
    //    Image: "",
        Prix: 0,
        Livraison: ""
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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`https://fullstack-back-app.herokuapp.com/composant/find/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();



        const {Name,Etat,Marque,Description,Prix,Livraison} = inpval;

        const res2 = await fetch(`https://fullstack-back-app.herokuapp.com/composant/updatecompo/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Name,Etat,Marque,Description,Prix,Livraison
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            history("/listecomposant")
          //  setUPdata(data2);
        }

    }


    return(
        <div>






            <div id="layout-wrapper">





















            <Header/>


















                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">


                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18 text-center">Edit Composant</h4>
                                    </div>
                                </div>
                            </div>







                            <div class="row">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                                <Link to={`/listecomposant`}>

                                                    <button  type="button" className="btn btn-danger btn-block waves-effect waves-light rog "
                                                             data-bs-toggle="modal" data-bs-target="#composemodal">
                                                        Return to list
                                                    </button>
                                                </Link>
                                                <h4 className="card-title">Edit Piece</h4>











                                                <form className="mt-4">
                                                    <div className="row">
                                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputEmail1"
                                                                   className="form-label">Name</label>
                                                            <input type="text" value={inpval.Name} onChange={setdata}
                                                                   name="Name" className="form-control"
                                                                   id="exampleInputEmail1"
                                                                   aria-describedby="emailHelp"/>
                                                        </div>



                                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputPassword1"
                                                                   className="form-label">Gategorie</label>
                                                            <select value={inpval.Etat}  onChange={setdata} name="Etat"
                                                                    className="form-control" id="exampleInputPassword1">
                                                                <option value="Immobilier">Immobilier</option>
                                                                <option value="Jardinage">Jardinage</option>
                                                                <option value="Electronique">Electronique</option>
                                                                <option value="Telephonique">Telephonique</option>
                                                                <option value="Jardinage">Jardinage</option>

                                                            </select>
                                                        </div>




                                                                        







                                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputPassword1"
                                                                   className="form-label">Marque</label>
                                                            <input type="text" value={inpval.Marque} onChange={setdata}
                                                                   name="Marque" className="form-control"
                                                                   id="exampleInputPassword1"/>
                                                        </div>




                                                           <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputPassword1"
                                                                   className="form-label">Livraison</label>
                                                        <select value={inpval.Livraison}  onChange={setdata} name="Livraison"
                                                                className="form-control" id="exampleInputPassword1">
                                                            <option value="Oui">Oui</option>
                                                            <option value="Non">Non</option>

                                                        </select>
                                                        </div>



                                                


                                                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputPassword1"
                                                                   className="form-label">Prix</label>
                                                            <input type="number" value={inpval.Prix} onChange={setdata}
                                                                   name="Prix" className="form-control"
                                                                   id="exampleInputPassword1"/>
                                                        </div>
                                                        <div className="mb-3 col-lg-12 col-md-12 col-12">
                                                            <label htmlFor="exampleInputPassword1"
                                                                   className="form-label">Description</label>
                                                            <textarea name="Description" value={inpval.Description} onChange={setdata}
                                                                      className="form-control" id="" cols="30"
                                                                      rows="5"></textarea>
                                                        </div>

                                                        <button type="submit" onClick={updateuser}
                                                                className="btn btn-primary">Editer
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



export default EditComposant;