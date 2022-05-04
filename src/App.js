import logo from './logo.svg';
import './assets/css/bootstrap.min.css';

import './assets/css/app.min.css';
import Home from'./pages/home';
import Menu from './pages/menu';
import {  BrowserRouter, Router,Route, Routes,Switchn,useParams } from "react-router-dom";
import React from 'react';



import Authentication from './pages/authentication'
import Register from './pages/register';
import PrivateRoute from './Routing/privateroute';
import Dash from './pages/dashboard';
import RegisterVerifiy from './pages/registerverify'
import AdditionalInfo from './pages/additionalInfo';
import PasswordRecover from './pages/passwordRecover';
import RecoverPasswordVerify from './pages/recoveryverify';
import UserProfile from './pages/userProfile';


import Brokenpeices from './pages/brokenpeices'
import Afficheproducts from './pages/afficheproducts';
import Affichbroken from './pages/affichbroken';
import Updateitem from './pages/updateitem';
import Listecomposantbackend from "./pages/listecomposantbackend";
import EditComposant from "./pages/EditComposant";
import DetailCompoBack from "./pages/DetailCompoBack";
import AjoutComposant from "./pages/ajoutComposant";
import ComposantDetailFront from "./pages/composantdetailFront";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Myproducts from './pages/myproducts';
import Listebesoins from "./pages/listebesoins";

import AddLivreur from './pages/Livreur/AddLivreur';
import Listlivreur from './pages/Livreur/ListLivreur';
import AdminLivreur from './pages/Livreur/LivreurBack';
import DetailLivreur from './pages/Livreur/LivreurDetails';
import Profil from './pages/Livreur/Profil';
import ProfilP from './pages/Livreur/ProfilP';

import AjoutService from './pages/Service/AddService';
import Listservice from './pages/Service/AffServices';
import DetailServices from './pages/Service/DetailService';
import Mailer from './pages/Service/Mailer';
import Email from './pages/Livreur/Mailer';
import Login from './pages/Livreur/Login';
import ListServicebackend from'./pages/Service/ListServicebackend';
import DetailsBrokenPiece from './pages/DetailsBrokenPiece';

import UpdateLivreur from './pages/Livreur/UpdateLivreur';
import UpdateService from './pages/Service/UpdateService';
import AjoutBesoin from './pages/ajoutBesoin';
import MyService from './pages/Service/MyService';
import Affichcars from './pages/affichcars';
import Clothes from './pages/clothes';
import Animals from './pages/animals';
import Electro from './pages/electro';
import Jardinage from './pages/jardinage';
import DetailItem from './pages/detailItem';
import Affichage from './pages/affichage';
import DetailItemback from './pages/detaiItemback';
import Acceuil from './pages/acceuil';
import Header from './pages/Header';
import DemandeLivreur from './pages/Livreur/DemandeLivreur';
import Confirmation from './pages/Livreur/Confirmation';



function App() {
  return (
  
    <div className='App'>
     
{/*  <Menu/> */}
{/*  <Header/> */}

      <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/broken' element={<Brokenpeices/>} />
      <Route path='/affiche' element={<Afficheproducts/>} />
      <Route path='/afficher' element={<Affichbroken/>} />
      <Route path='/update/:_id' element={<Updateitem/>} />
      <Route path='/myproducts' element={<Myproducts/>} />
   
      <Route path='/clothes' element={<Clothes/>} />
      <Route path='/animals' element={<Animals/>} />
      <Route path='/electro' element={<Electro/>} />
      <Route path='/jardinage' element={<Jardinage/>} />
      <Route path='/cars' element={<Affichcars/>} />
      <Route path='/affichage' element={<Affichage/>} />
      <Route path='/details/:id' element={<DetailItem/>} />
      <Route path='/detailsback/:id' element={<DetailItemback/>} />
      


    


          <Route path='/listecomposant' element={<Listecomposantbackend/>} />
          <Route path='/updateCompo/:id' element={<EditComposant/>} />
          <Route path='/addcomposant' element={<AjoutComposant/>} />
          <Route path='/viewcomposant/:id' element={<DetailCompoBack/>} />
          <Route path='/viewcomposantfront/:id' element={<ComposantDetailFront/>} />
          <Route path='/detailpiece/:id' element={<DetailsBrokenPiece/>} />
          <Route path='/addbesoin' element={<AjoutBesoin/>} />
          <Route path='/Listebesoins' element={<Listebesoins/>} />
          <Route path='/' element={<Acceuil/>} />
          <Route path='/header' element={<Header/>} />







          <Route path='/list' element={<Listlivreur/>} />
          <Route path='/add' element={<AddLivreur/>} />  
          <Route path='/livreurBack' element={<AdminLivreur/>} />  
          <Route path='/DetailLivreur/:id' element={<DetailLivreur/>} />
          <Route path='/profil/:id' element={<Profil/>} />  
          <Route path='/profilp' element={<ProfilP/>} />  
          <Route path='/demande' element={<DemandeLivreur/>} />  
          <Route path='/Confirmation' element={<Confirmation/>} />



        <Route path ='/dashboard' element={<Dash/>}/>
      <Route path ='/userProfile' element={<UserProfile/>}/>
      <Route path ='/auth' element={<Authentication/>} />
      <Route path ='/registerVerification' element={<RegisterVerifiy/>}/>
      <Route path ='/addinfo' element={<AdditionalInfo/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/PasswordRecover' element={<PasswordRecover/>} />
      <Route path='/PasswordRecoverVerify' element={<RecoverPasswordVerify/>} />







          <Route path='/AjoutService' element={<AjoutService/>} />  
          <Route path='/listService' element={<Listservice/>} />
          <Route path='/detailServices/:id' element={<DetailServices/>} />    
          <Route path='/mail' element={<Mailer/>} />
          <Route path='/email' element={<Email/>} />
          <Route path='/acceuil' element={<Login/>} />
          <Route path='/service' element ={<ListServicebackend/>}/>
          <Route path='/updatelivreur/:id' element ={<UpdateLivreur/>}/>
          <Route path='/updateservice/:id' element ={<UpdateService/>}/>
          <Route path='/myservice' element ={<MyService/>}/>

          



      </Routes>
      </BrowserRouter>
      <ToastContainer />

     </div>
     
      
      

  );
}

export default App;
