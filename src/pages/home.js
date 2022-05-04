import React, {Component} from "react";
import {  useNavigate,Link } from "react-router-dom";
import emailjs from "emailjs-com"
//import { BrowserRouter, Route, Link } from "react-router-dom";
import ItemDataService from "../services/item.services";
//import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import Header from '../pages/Header';



export default class Home extends Component{
    
    
    constructor(props){
        super(props)
        
        
        this.state = {
           
            itemName:"",
            picture:"",
            price:"",
            categorie:"",
            descreption:"",
            submitted:false,
    
        };
        //const form = useRef();
        console.log(this.state)
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangePicture =  this.onChangePicture.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCategorie = this.onChangeCategorie.bind(this);
        this.onChangeDescreption=this.onChangeDescreption.bind(this);
        this.saveItem=this.saveItem.bind(this);
        
    }
    
    onChangeItemName(e){
        this.setState({
            itemName: e.target.value
        });
    }
    onChangePicture(e){
        this.setState({
            picture: e.target.files[0]
        });
    }
    onChangeCategorie(e){
        
        this.setState({
            categorie:e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }
    onChangeDescreption(e){
        this.setState({
            descreption: e.target.value
        });
    }
   /* saveItem(){
        //console.log(this.state)
        var formData = new FormData()
       var data ={
            
            itemName: this.state.itemName,
            picture: this.state.picture,
            price: this.state.price,
            categorie:this.state.categorie,
            
            
        };
        ItemDataService.create(formData)
        .then(response => { 
          
            
            FormData.append('picture',this.state.picture)
            formData.append('itemName',data.itemName)
            formData.append('categorie',data.categorie)
            formData.append('price',data.price)
            this.setState({
            id : response.data.id,
            itemName: response.data.itemName,
            categorie:response.data.categorie,
            picture : response.data.picture,
            price:response.data.price,
            submitted:true,
           

        });
        
        console.log(Response.data);
    })
    .catch(e=>{
        console.log(e)
    });
}*/
// form = useRef();
saveItem(e){
    
  //var navigate = useNavigate();
  var formData = new FormData()
  formData.append('photo',this.state.picture)
  formData.append('itemName',this.state.itemName)
  formData.append('categorie',this.state.categorie)
  formData.append('price',this.state.price)
  formData.append('descreption',this.state.descreption)
  ItemDataService.create(formData)
  .then(response => {
    //var form=this.state
    console.log(response)
    toast("vous avez ajoute un produit")
    var templateParams = {
        name: 'item',
        notes: 'hi'
    };
    
   // const form = useRef();
    //e.preventDefault();
   emailjs.send('service_mt4njrq', 'template_trd09xj',templateParams, '_wbRyyw5RN5zysiVt')
    
      
      //e.target.reset();
   // navigate('/affiche')
   
  })
}
newItem(){
    this.setState({
        id: null,
        itemName:"",
        picture:"",
        price:"",
        categorie:"",
        descreption:"",
        submitted:false

    });
}
render() 
{const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return (
     
      <div>
          
            
      <div>
      <div id="layout-wrapper">

  
      <Header/>




<div class="main-content">

<div class="page-content">
<div class="container-fluid">


<div class="row">
  <div class="col-12">
      <div class="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 class="mb-sm-0 font-size-18 text-center">Add new  Piece</h4>

       

          <Link to={`/myproducts`}>
            <button  type="button" className="btn btn-danger btn-block waves-effect waves-light rog "
                      data-bs-toggle="modal" data-bs-target="#composemodal">
                     Return To list
                </button>
                </Link>









      </div>
  </div>
</div>


<div class="row">
  <div class="col-12">
      <div class="card">
          <div class="card-body">

         
  <center>
          <div className="form-group" class="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="itemName">Name</label>
        <input
          type="text"
          className="form-control"
          id="itemName"
          required
          value={this.state.itemName}
          onChange={this.onChangeItemName}
          name="itemName"
        />
      </div>
      </center>
      <center>
      <div className="form-group" class="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="picture">Picture</label>
        <input
          type="file"
          className="form-control"
          id="picture"
          required
          
          onChange={this.onChangePicture}
          name="picture"
        />
      </div>
      </center>
      <center>
      <div className="form-group" class="mb-3 col-lg-6 col-md-6 col-12">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          required
          value={this.state.price}
          onChange={this.onChangePrice}
          name="price"
        />
      </div> 
      </center>
      <center>
      <div className="mb-3 col-lg-6 col-md-6 col-12">
                                                            <label htmlFor="exampleInputPassword1"
                                                                   className="form-label">Gategorie</label>
                                                            <select value={this.state.categorie}  onChange={this.onChangeCategorie} name="categorie"
                                                                    className="form-control" id="exampleInputPassword1">
                                                                <option value="Clothes">Clothes</option>
                                                                <option value="Animals">Animals</option>
                                                                <option value="Electronique">Electronique</option>
                                                                <option value="Cars">CARS</option>
                                                                <option value="Jardinage">Jardinage</option>

                                                            </select>
                                                        </div>
                                                        </center>
      <center><div className="form-group" class="mb-3 col-lg-8 col-md-10 col-12">
        <label htmlFor="descreption">Descreption</label>
        <textarea
          type="textarea"
          className="form-control"
          id="descreption"
          options={this.options}
          required
          value={this.state.descreption}
          onChange={this.onChangeDescreption}
          name="descreption"
        />
      </div>
      </center>
      <button onClick={this.saveItem} className="btn btn-success">
        Submit
        
      </button>
      <ToastContainer />

      


      













           
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
  </div>
  );
}
}
