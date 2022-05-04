import React , {useState,useEffect,useContext} from "react";
import {useNavigate, useParams} from "react-router-dom";

import Header from '../pages/Header';





const  detailItem = () => {
    const [getuserdata, setUserdata] = useState([]);

    
    console.log(getuserdata);
    const { id } = useParams("");
    const history = useNavigate();
    
    const getdata = async () => {

        const res = await fetch(`https://fullstack-back-app.herokuapp.com/items/${id}`, {
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
            setUserdata(data)
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata();
    }, [])
    const ajoutfav = async () => {
        //e.preventDefault();

        const res = await fetch(`https://fullstack-back-app.herokuapp.com/items/modifier/${id}/favoris`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
            history('/affichage')
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
                                    





                                </div>
                            </div>
                        </div>







                        <div class="row">


                            <div className="row">
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body">

                                            
                                            <h4 className="card-title">Detail</h4>













                                            <div className="container mt-3">
                                                <h1 style={{ fontWeight: 400 }}>{getuserdata.itemName}</h1>

                                               
                                                        <div className="add_btn">
                                                            
                                                            
                                                        </div>
                                                        <div className="row">
                                                            <div className="left_view col-lg-6 col-md-6 col-6">
                                                            <p > Description: {getuserdata.descreption}</p>
                                                           <p >Prix: {getuserdata.price}  DT </p>
                                                                <p >Marque:{getuserdata.categorie}</p>
                                                           
                                                                
                                                            
                                                                
                                                                
                                                                
                                                            </div>
                                                            

                                                            
                                                                
                                                                
                                                            
                                                        </div>
                                                        
                                                    
                                            </div>
                                            <button className="btn btn-danger" onClick={() => ajoutfav(getuserdata.id)}>add to fav</button>


































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
export default detailItem;