import React, { useState,setState,useRef} from "react";
import axios from 'axios'
import { Link,useHistory, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Header from '../../pages/Header';


function onChange(value){
    
}

export default function AjoutService (props){
  const [x,setx]=useState(null);
  const history = useNavigate();
  
  var [service, setservice] = useState({
    type: "",
    title: "",
    maxPart:"",
    governorate:"",
    city:"",
    zipcode:"",
    description:"",
    disponibility:"",
    weekend:"",
    day:"",
    night:"",
    
    
  });

  var { type,title,maxPart,governorate,city,zipcode,description,disponibility,weekend,day,night} = service;
  var onInputChange = e => {
    setservice({ ...service, [e.target.name]: e.target.value });
    console.log (service);
    
  };
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const reCaptcha = useRef();

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://fullstack-back-app.herokuapp.com/service/add", service);
    alert("votre Service a ete ajoute")
    history("/listService");
  };


        return(

            
            <div id="layout-wrapper">
       
       <Header/>

            
            <div className="main-content">
              <div className="page-content">
                <div className="container-fluid">
                  {/* start page title */}
                  <div className="row">
                    <div className="col-12">
                      <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">Add Service</h4>
                        <div className="page-title-right">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="javascript: void(0);">Afar by SKOLLS</a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end page title */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                        <h4 className="col-3" >Service information</h4>
                          <p className="col-3">Fill all information below</p>
                          <form className="needs-validation" noValidate onSubmit={e => onSubmit(e)} >
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <h6 className="col-1">Type :</h6>
                                  <div>
                                    <select className="form-control select2"  name="type"  value={type} onChange={e => onInputChange(e)}>
                                      <option>Select</option>
                                      <option value="Baby-sitting">Baby-sitting</option>
                                      <option value="carpooling">carpooling</option>
                                      <option value="shopping">shopping</option>
                                      <option value="private lesson">private lesson</option>
                                    </select>
                                  </div>
                                  <div className="mb-12">
                                    { service.type==("carpooling") &&(
                                      
                                    
                                    <input
                                      
                                      name="maxPart"
                                      type="text"
                                      className="form-control"
                                      placeholder="number of place disponible"
                                      value={maxPart} onChange={e => onInputChange(e)}
                                    />)  }
                                  
                                    
                                  </div>
                                  <div className="mb-3">
                                  <h6 className="col-1" style={{marginTop:"10px"}}>Title  :</h6>
                                    <input
                                      
                                      name="title"
                                      type="text"
                                      className="form-control"
                                      placeholder="Title"
                                      value={title} onChange={e => onInputChange(e)}
                                    />
                                  </div>
                                  
                                </div>
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="formrow-inputCity"
                                        className="form-label"
                                      >
                                        Governorate :
                                      </label>
                                      <input
                                      
                                      name="governorate"
                                      type="text"
                                      className="form-control"
                                      placeholder="governorate"
                                      value={governorate} onChange={e => onInputChange(e)}
                                    />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="formrow-inputState"
                                        className="form-label"
                                      >
                                        City  :
                                      </label>
                                      <input
                                      
                                      name="city"
                                      type="text"
                                      className="form-control"
                                      placeholder="city"
                                      value={city} onChange={e => onInputChange(e)}
                                    />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="formrow-inputZip"
                                        className="form-label"
                                      >
                                        Zip  :
                                      </label>
                                      <input
                                      
                                      name="zipcode"
                                      type="text"
                                      className="form-control"
                                      placeholder="zip code"
                                      value={zipcode} onChange={e => onInputChange(e)}
                                    />
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-6">
                                <h6 className="col-2">Description  :</h6>
                                  <textarea
                                    className="form-control"
                                    name="description"
                                    rows={5}
                                    placeholder="Service description"
                                    value={description} onChange={e => onInputChange(e)}
                                  />
                                  <div className="mb-6">
                                <h6 className="col-2">Disponibility  :</h6>
                                <div className="form-check form-check-inline">
    <input className="form-check-input" name="disponibility" onChange={(e)=>onInputChange(e)}type="checkbox" id="inlineCheckbox1" value="Everyday"/>
    <label className="form-check-label" htmlFor="inlineCheckbox1">everyday</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" name="weekend" onChange={(e)=>onInputChange(e)}type="checkbox" id="inlineCheckbox2" value="Weekend only"/>
    <label className="form-check-label" htmlFor="inlineCheckbox1">weekend only</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" name="day" onChange={(e)=>onInputChange(e)}type="checkbox" id="inlineCheckbox2" value="Day"/>
    <label className="form-check-label" htmlFor="inlineCheckbox1">day</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" name="night" onChange={(e)=>onInputChange(e)}type="checkbox" id="inlineCheckbox2" value="Night"/>
    <label className="form-check-label" htmlFor="inlineCheckbox1">night</label>
  </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                            <ReCAPTCHA
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        ref={reCaptcha}
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={(token) => setToken(token)}
                        onExpired={(e) => setToken("")}
                      />,
                             
                           
                            </div>
                            <div className="col-10">
                            <Link to={`/listService`}>
                        <button
                            type="button"
                            className="btn btn-secondary waves-effect waves-light"
                            style={{marginRight:"10px"}}
                          >
                            Cancel
                          </button>
                          </Link>
                              <button disabled={!token}  type="submit" className="btn btn-success">
                                add service
                              </button>
                              
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>{" "}
                    {/* container-fluid */}
                  </div>
                  {/* End Page-content */}
                  <footer className="footer">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-6">© Afar.</div>
                        
                      </div>
                    </div>
                  </footer>
                </div>
               
              </div>
              
             
                {/* end slimscroll-menu*/}
              </div>
              {/* /Right-bar */}
              {/* Right bar overlay*/}
              </div>
          
        );
    }

    
