import React from "react";
import {  Link } from "react-router-dom";

class menu extends React.Component{
    render(){
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
            <Link to={`/livreurback`}>

                <a href="livreurback" class="waves-effect">
                    <i class="bx bx-car"></i>
                    <span key="t-chat">Delivery</span>
                </a>
                </Link>

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







            </div>

        )
    }
}
export default menu;