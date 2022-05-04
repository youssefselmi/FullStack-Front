import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark"alt="" height={150}>
    <img src="assets/images/afar-logo.png" alt=""  />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to={`/acceuil`}>
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </Link>

      </li>
      <li className="nav-item">
      <Link to={`/affichage`}>
        <a className="nav-link" href="#">Items</a>
        </Link>

      </li>
      <li className="nav-item">
      <Link to={`/afficher`}>
        <a className="nav-link" href="#">Broken pieces</a>
        </Link>

      </li>
      <li className="nav-item">

      <Link to={`/listService`}>
        <a className="nav-link" href="#">Services</a>
        </Link>

      </li>
      <f><li className="nav-item">
      <Link to={`/list`}>
       <a className="nav-link" href="#">Delivery</a>
       </Link>

      </li>
      </f>
      
      
      
      
     <k> <li className="nav-item">
      <form className="form-inline">
  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  </form>
  </li>
  </k>
<g> <li className="nav-item">
  <form className="form-inline">
  <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
</form>
        
      </li>
      </g>
    <h> <li className="nav-item">

     <button type="button" className="btn btn-outline-success" right-margin="50px">Sign-in</button>
      </li>
      </h>
      <li className="nav-item">

<button type="button" className="btn btn-outline-primary" right-margin="50px">Sign-up</button>
 </li>
    </ul>
    
  </div>
</nav>
      
    </header>
  );
}
export default Header;