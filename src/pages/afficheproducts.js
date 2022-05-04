import React from "react";
import ItemDataService from "../services/item.services"
import {  Link } from "react-router-dom";


import http from "../http-common";
import Header from '../pages/Header';

//import App from "./App";

class afficheproducts extends React.Component{
    constructor(props){
        super(props)
       this.retrieveItems=this.retrieveItems.bind(this)
     
       //this.Curritem=this.Curritem.bind(this)
        this.state={
            _id:null,
            items: [],
            prix:0 ,
            favoris:true,
           Curritem: {
                _id:null,
                itemName:'',
                picture:'',
                price:'',
                categorie:'',
            }
            

           
            
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }
    handleChange(favoris){
        this.setState({favoris})

    }
    addtofavorit(id,data){
         http.put(`/modifier/${id}/favoris`,data);
         console.log(id,data)
        

    }
    handleInput  (e){
        this.setState({ 
            prix: e.target.value } );
            
        
      }
    setData(id){
       
        localStorage.setItem("ID",id);
       
        console.log(id)
    }
    
     deleteitem (id){
        

       if(window.confirm("Are you sure you want to delete")){
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
    retrieveItems(){
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
      
        const {items,prix}=this.state;

        
         
    
        
       
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
                                    <h4 class="mb-sm-0 font-size-18">Products</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="#/">Ecommerce</a></li>
                                            <li class="breadcrumb-item active">Products</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                       

                        <div class="row">
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-4">Filter</h4>

                                        <div>
                                            <h5 class="font-size-14 mb-3">Categorie</h5>
                                            <ul class="list-unstyled product-list">
                                                <li><a href="cars"><i class="mdi mdi-chevron-right me-1"></i> Cars</a></li>
                                                <li><a href="clothes"><i class="mdi mdi-chevron-right me-1"></i> Clothes</a></li>
                                                <li><a href="animals"><i class="mdi mdi-chevron-right me-1"></i> Animals</a></li>
                                                <li><a href="electro"><i class="mdi mdi-chevron-right me-1"></i> Electronique</a></li>
                                                <li><a href="jardinage"><i class="mdi mdi-chevron-right me-1"></i> Jardinage</a></li>
                                            </ul>
                                        </div>
                                        <div class="mt-4 pt-3">
                                            <h5 class="font-size-14 mb-3">Price: { prix }  Dt</h5>
                                            <input type="range" min={0} max={1000} onChange={ this.handleInput } />
                                            
                                           
                                        </div>

                                       
                                            

                                       
                                    </div>
                                </div>
                                
                            </div>
                            <div class="col-lg-9">
                                    
                                <div class="row mb-3">
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="mt-2">
                                            <h5>Clothes</h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-sm-6">
                                        <form class="mt-4 mt-sm-0 float-sm-end d-sm-flex align-items-center">
                                            <div class="search-box me-2">
                                                <div class="position-relative">
                                                    <input type="text" class="form-control border-0" placeholder="Search..."/>
                                                    <i class="bx bx-search-alt search-icon"></i>
                                                </div>
                                            </div>
                                            <ul class="nav nav-pills product-view-nav justify-content-end mt-3 mt-sm-0">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#/"><i class="bx bx-grid-alt"></i></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#/"><i class="bx bx-list-ul"></i></a>
                                                </li>
                                            </ul>
                                            
                                            
                                        </form>
                                    </div>
                                </div>
                                
                                <div class="row">

                                {
                                    items && items.filter(item=>{return item.price > parseInt(prix,10)})
                                    .map((item,index)=>
                                     {     
                                         this.state.Curritem._id=item._id;
                                         
                                         const splitPath = item.picture.split("\\");
            const path = splitPath[splitPath.length - 1];
         //   console.log(image);
          //  console.log(path);
            return(
                                    
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="product-img position-relative">
                                                    <img height='220' widht='220' src={`http://localhost:3000/${path}`} />
                                             

                                                    
                                                </div>
                                                <div class="mt-4 text-center">
                                                    <h5 class="mb-3 text-truncate"><a href="#/" class="text-dark">{item.itemName}</a></h5>
                                                    
                                                   
                                                    
                                                    <h5 class="my-0"><span class="text-muted me-2"></span> <b>{item.price}   DT </b></h5>
                                                    <br></br>
                                                   
                                                    
                                                    { !item.favoris && 
<button onClick={() => { this.addtofavorit=this.addtofavorit.bind(item._id,item) }}  aria-label="delete" color="primary">
</button>
}
{item.favoris &&
<button onClick={() => { this.handleChange(!this.favoris) }} aria-label="delete" color="primary">
</button>
}
<Link to={`/details/${item._id}`}>
                                                                <button className="btn btn-dark" >Details</button>
                                                            </Link>
                                                    
                                                    
                                            
                                                   

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
export default afficheproducts;