import React , {useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import "./listecomposant.css";
import Axios from "axios";
import axios from "axios";
import {toast} from "react-toastify";
import 'jspdf-autotable'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import Header from '../pages/Header';


import $ from 'jquery'; 




const Listebesoins = () => {







    const [data, setData] = useState([]);



    useEffect(()=>{
            getComposants();
        },[]
    );

    const getComposants = async () => {
        const response = await axios.get("https://fullstack-back-app.herokuapp.com/besoin/readbesoins");
        if (response.status === 200){
            setData(response.data);
        }

    };







/////////////////// Delete //////////////////////////////
    const onDeleteComposant = async (id) => {
        if(window.confirm("Are you sure to delete ton besoin"))
        {

            const response = await axios.delete(`https://fullstack-back-app.herokuapp.com/besoin/delete/${id}`);
            if (response.status === 200)
            {
                toast.success(response.data);
                getComposants();
            }
        }
    }



/*const handlePDF= () => {
    const doc = new jsPDF();
    console.log(data);
    let rows = [];
data.map(i=>{
    let temp = [
        i.Name,
        i.Etat,
        i.Prix,
        i.Marque,
      ];
      rows.push(temp);

})
    doc.autoTable({
        	
        head: [['Name', 'Etat', 'Prix', 'Marque']],
        body:  rows
        ,
      })
      doc.save('listepieces.pdf')
}*/

$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,1000);
});


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
                                        <h4 class="mb-sm-0 font-size-18 text-center">Liste Composant</h4>





                                    </div>
                                </div>
                            </div>







                            <div class="row">


                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                                <Link to={`/addbesoin/`}>

                                                    <button  type="button" className="btn btn-danger btn-block waves-effect waves-light rog "
                                                             data-bs-toggle="modal" data-bs-target="#composemodal">
                                                        Add New besoin
                                                    </button>
                                                </Link>
                                                

                                                
                                                <h4 className="card-title">Liste des Pieces</h4>


                                                <table id="example" class="table table-hover table-bordered"
                                                       className="table table-bordered dt-responsive  nowrap w-100 styled-table">
                                                    <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Besoinrecherche</th>
                                                        <th>Date de postulation</th>
                                                        <th>Actions</th>


                                                    </tr>
                                                    </thead>


                                                    <tbody>
                                                    {data && data.map((item,index) => {
                                                        return (

                                                            <tr key={index}>
                                                                <th>{index+1}</th>
                                                                <td>{item.Name}</td>
                                                                <td>{item.Email}</td>
                                                                <td>{item.Besoinrecherche}</td>
                                                                <td>{item.Datepostulation}</td>



                                                                <td>
                                                                    <button class="btn btn-danger" onClick={() => onDeleteComposant(item._id)}> Delete</button>
                                                                </td>

                                                            </tr>

                                                        )
                                                    })}


                                                    </tbody>
                                                </table>

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

            <script src="jspdf.min.js"></script>
            <script src="jspdf.plugin.autotable.min.js"></script>

            <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
            <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />







        </div>



    )










}



export default Listebesoins;