import React, { Component } from "react";
import ItemDataService from "../services/item.services";
import { Link, useParams } from 'react-router-dom';
//import { ReactNotifications } from 'react-notifications-component'
//import {NotificationContainer, NotificationManager} from 'react-notifications';
//import { Store } from "react-notifications-component";
import Header from '../pages/Header';

export default class updateitem extends Component{
    constructor(props){
       
        super(props)
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice=this.onChangePrice.bind(this);
        this.getItem=this.getItem.bind(this);
        this.updatePublished=this.updatePublished.bind(this);
        this.updateItem=this.updateItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.state={
            currentItem:{
                _id:null,
                itemName:'',
                picture:'',
                price:'',
                categorie:'',
            },
            message: ""
        }
    }
    componentDidMount(){
      var id=localStorage.getItem('ID')
        this.getItem(id);
    }
    onChangeName(e){
        const itemName=e.target.value;
        this.setState(function(prevState){
            return{
                currentItem:{
                    
                    itemName:itemName
                }
            };
        });
    }
    onChangePrice(e){
        const price=e.target.value;
        this.setState(prevState=>({
            currentItem:{
                
                price:price
            }
        }));
    }
    getItem(id){
        ItemDataService.get(id)
        .then(response=>{
            this.setState({
                currentItem:response.data
            })
            
        })
    }
    updatePublished(status){
        var data ={
            _id:this.state.currentItem._id,
            itemName:this.state.currentItem.itemName,
            price:this.state.currentItem.price,
            picture:this.state.currentItem.picture,
            categorie:this.state.currentItem.categorie,
            published:status
        };
        ItemDataService.update(this.state.currentItem._id,data)
        .then(response =>{
            this.setState(prevState=> ({
                currentItem:{
                    ...prevState.currentItem,
                    published:status

                }
            }));
            console.log(response.data)
        })
        .catch(e=>{
            console.log(e)
        });
    }
    updateItem(){
      var id=localStorage.getItem('ID')
        ItemDataService.update(id,
            this.state.currentItem
            )
            .then(response =>{
                console.log(response.data);
               // NotificationManager.success('Success message', 'Title here');
               
            })
            .catch(e =>{
                console.log(e)
            });
    }
    deleteItem(){
        ItemDataService.delete(this.state.currentItem._id)
        .then(response=>{
            console.log(response.data);
            this.props.hisory.push('/items')
        })
        .catch(e=>{
            console.log(e);
        });
    }
    render() {
        const { currentItem } = this.state;
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
    
           
    
    
    
          </div>
      </div>
    </div>
    
    
    <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">
    
                  
    
               {currentItem ? (
                  <div className="edit-form">
                    <h4>ITEMS
                       {currentItem.itemName}
                    </h4>
                    <form>
                      
                      <div className="form-group">
                        <label htmlFor="description">Price</label>
                        <input
                          type="text"
                          className="form-control"
                          id="price"
                          value={currentItem.price}
                          onChange={this.onChangePrice}
                        />
                      </div>
                     
                    </form>
                   
                   
                    <button
                      type="submit"
                     
                      onClick={this.updateItem}
                    >
                      Update
                    </button>
                    <p>{this.state.message}</p>
                  </div>
                ) : (
                  <div>
                    <br />
                    <p>Please click on an Item...</p>
                  </div>
                )}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
               
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
    