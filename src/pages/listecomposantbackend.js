import React , {useState,useEffect,useContext} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./listecomposant.css";
import axios from "axios";
import {toast} from "react-toastify";
import { updatedata } from './context/ContextProvider'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import Header from '../pages/Header';



const Listecomposantsbackend = () => {


    const [data, setData] = useState([]);
    useEffect(()=>{
            getComposants();
        },[]
    );

    const getComposants = async () => {
        const response = await axios.get("https://fullstack-back-app.herokuapp.com/composant/readcomposants");
        if (response.status === 200){
            setData(response.data);
        }

    };



    





/////////////////// Delete //////////////////////////////
    const onDeleteComposant = async (id) => {
        if(window.confirm("Are you sure todelete this composant"))
        {

            const response = await axios.delete(`https://fullstack-back-app.herokuapp.com/composant/delete/${id}`);
            if (response.status === 200)
            {
                toast.success(response.data);
                getComposants();
            }
        }
    }

    /////////// Update ////////////////
    const {updata, setUPdata} = React.useContext(updatedata);

    ///////////// pdf /////////////////


const handlePDF= () => {
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
}

 

 



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
                    <Link to={`/myproducts`}>

                    <span key="t-chat">MY ITEMS</span>
                    </Link>

                </a>
            </li>
        <li>
                <a href="addComposant" class="waves-effect">
                    <i class="bx bx-file"></i>
                    <Link to={`/listecomposant`}>

                    <span key="t-file-manager">Broken Pieces</span>
                    </Link>

                </a>
            </li>

        
            


           
            <li>
                <a href="livreurback" class="waves-effect">
                    <i class="bx bx-car"></i>
                    <Link to={`/livreurBack`}>
                    <span key="t-chat">Delivery</span>
                    </Link>

                </a>
            </li>

            <li>
                <a href="service" class="waves-effect">
                    <i class="bx bx-book"></i>
                    <Link to={`/service`}>

                    <span key="t-chat"> Services</span>
                    </Link>

                </a>
            </li>



            <li>
                <a href="service" class="waves-effect">
                    <i class="bx bx-book"></i>
                    <Link to={`/dashboard`}>
                    <span key="t-chat"> Users</span>
                    </Link>

                </a>
            </li>


                                        

        </ul>
    </div>
 
</div>
</div>





















            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }





            <div id="layout-wrapper">







            <Header/>












                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">


                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18 text-center">Liste Pieces</h4>





                                    </div>
                                </div>
                            </div>







                            <div class="row">


                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                                <Link to={`/addComposant/`}>

                                                    <button  type="button" className="btn btn-danger btn-block waves-effect waves-light rog "
                                                             data-bs-toggle="modal" data-bs-target="#composemodal">
                                                        Add New Piece
                                                    </button>
                                                </Link>

                                                
                                                    <button  type="button" className="btn btn-danger btn-block waves-effect waves-light rog "
                                                            onClick={handlePDF}>
                                                      PDF
                                                    </button>

                                                
                                                <h4 className="card-title">Liste des Pieces</h4>


                                                <table id="example" class="table table-hover table-bordered"
                                                       className="table table-bordered dt-responsive  nowrap w-100 styled-table">
                                                    <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Name</th>
                                                        <th>Gategorie</th>
                                                        <th>Prix</th>
                                                        <th>Marque</th>
                                                        <th>Actions</th>


                                                    </tr>
                                                    </thead>


                                                    <tbody>
                                                    {data && data.map((item,index) => {
                                                        return (

                                                            <tr key={index}>
                                                                <th>{index+1}</th>
                                                                <td>{item.Name}</td>
                                                                <td>{item.Etat}</td>
                                                                <td>{item.Prix}</td>
                                                                <td>{item.Marque}</td>



                                                                <td>

                                                                    <Link to={`/updateCompo/${item._id}`}>
                                                                        <button className="btn btn-success">Edit</button>
                                                                    </Link>

                                                                    <Link to={`/viewcomposant/${item._id}`}>
                                                                        <button className="btn btn-dark" >View</button>
                                                                    </Link>

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



export default Listecomposantsbackend;