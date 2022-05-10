import React, { useState } from "react";
import ReactDOM from 'react-dom';
import ItemDataService from "../services/item.services"
import {  Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import 'react-notifications-component/dist/theme.css'
//import { ReactNotifications } from 'react-notifications-component'
//import {NotificationContainer, NotificationManager} from 'react-notifications';
//import { Store } from "react-notifications-component";
import Header from '../pages/Header';

class myproducts extends React.Component{
    constructor(props){
        
        
        super(props)
       this.retrieveItems=this.retrieveItems.bind(this)
     
       //this.Curritem=this.Curritem.bind(this)
        this.state={
            _id:null,
            items: [],
           Curritem: {
                _id:null,
                itemName:'',
                picture:'',
                price:'',
                categorie:'',
            }
            

           
            
        }
        

        
    }
    
    setData(id){
       
        localStorage.setItem("ID",id);
       
        console.log(id)
    }
    
     deleteitem (id){
        
        console.log(id)
       if(window.confirm("Are you sure you want to delete ")){
            toast("vous allez supprimer cet objet")
           //var formData=new formData();
           //formData.append("")
           
           ItemDataService.delete(id)
           
           .then(response=>{
               
               
               window.location.reload()

                
               

               
               console.log(response.data)
              
                //this.retrieveItems;
               //this.retrieveItems();
           })
           .catch(e=>{
               console.log(e)
           })
        
       }
    }
    componentDidMount(){
        this.retrieveItems();
    }
    notify() {
        toast(" aaaa");
    }
    retrieveItems(){
       // const  [query,setQuery]=useState("")
        ItemDataService.getAll()
        .then(res=>{
            this.setState({
               items: res.data
            });
            console.log(res.data)
        })
        .catch(e=>{
            console.log('Erreur'+e)
        })
    }
    

    render(){
      
        const {items,Curritem}=this.state;
       

        
         
        
        
        var {image}="C:\Users\iheb\Desktop\PIIII\Pi back\pi";
        
       
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






                 <div id="layout-wrapper">





                 <Header/>






<div class="main-content">

                <div class="page-content">
                    <div class="container-fluid">

                       
                       

                        <div class="row">
                            
                            <div class="col-lg-9">
                                    
                                <div class="row mb-3">
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="mt-2">
                                            <h5>MY ITEMS</h5>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="row">

                                    {items && items.map((item,index)=>
                                     {    
                                         this.state.Curritem._id=item._id;
                                         
                                         const splitPath = item.picture.split("\\");
            const path = splitPath[splitPath.length - 1];
            console.log(image);
            console.log(path);
            return(
                                    
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="product-img position-relative">
                                                    <img height='220' width='220' src={`https://fullstack-back-app.herokuapp.com/${path}`} />
                                             

                                                    
                                                </div>
                                                <div class="mt-4 text-center">
                                                    <h5 class="mb-3 text-truncate"><a href="#/" class="text-dark">{item.itemName}</a></h5>
                                                    
                                                    <p class="text-muted">
                                                        <i class="bx bxs-star text-warning"></i>
                                                        <i class="bx bxs-star text-warning"></i>
                                                        <i class="bx bxs-star text-warning"></i>
                                                        <i class="bx bxs-star text-warning"></i>
                                                        <i class="bx bxs-star"></i>
                                                    </p>
                                                    <h5 class="my-0"><span class="text-muted me-2"></span> <b>{item.price}   DT </b></h5>
                                                    <br></br>
                                                    <Link className="edit-link" 
          to={"/update/" + item._id}>
          <button class="btn btn-danger" onClick={this.setData=this.setData.bind(this,item._id)}> edit </button>
        </Link>
        <br></br>
        <br></br>
                                                    
                                  <Link to={`/detailsback/${item._id}`}>
                                                                <button className="btn btn-dark" >Details</button>
                                                            </Link>
                                 
                                  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

                                  
                                  

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                     );})}
                                    
                                </div>
                                

                                <div class="row">
                                    <div class="col-lg-12">
                                        <ul class="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1">
                                            <li class="page-item disabled">
                                                <a href="#/" class="page-link"><i class="mdi mdi-chevron-left"></i></a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#/" class="page-link">1</a>
                                            </li>
                                            <li class="page-item active">
                                                <a href="#/" class="page-link">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#/" class="page-link">3</a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#/" class="page-link">4</a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#/" class="page-link">5</a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#/" class="page-link"><i class="mdi mdi-chevron-right"></i></a>
                                            </li>
                                        </ul>
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
            </div>
        )
    }
}
export default myproducts;