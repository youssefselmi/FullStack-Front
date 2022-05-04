import React , {useState,useEffect,useContext} from "react";

import { Link, useParams,useNavigate } from 'react-router-dom'

import Axios from "axios";

import {toast} from "react-toastify";

import { updatedata } from "../context/ContextProvider";
import Header from '../../pages/Header';

const UpdateService = () => {


    const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");
    
    

    const [inpval, setINP] = useState({
        type: "",
        title: "",
        maxPart: "",
        description: "",
        governorate:"",
        city:"",
        zipcode:"",
        disponibility:"",
        weekend:"",
        day:"",
        night:"",
   
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`https://fullstack-back-app.herokuapp.com/service/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateservice = async(e)=>{
        e.preventDefault();



        const {type,title,maxPart,description,governorate,city,zipcode,disponibility} = inpval;

        const res2 = await fetch(`https://fullstack-back-app.herokuapp.com/service/updateservice/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                type,title,maxPart,description,governorate,city,zipcode,disponibility
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            history("/listService")
          //  setUPdata(data2);
        }

    }
    



    
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
                    <h4 className="mb-sm-0 font-size-18">Update service</h4>
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
                    <h4 className="col-3" >Update service</h4>
                      <p className="col-3">Fill all information below</p>
                      <form className="needs-validation" noValidate  >
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="mb-3">
                              <h6 className="col-1">Type :</h6>
                              <div>
                                <select className="form-control select2"  name="type"  value={inpval.type} onChange={setdata}>
                                  <option>Select</option>
                                  <option value="Baby-sitting">Baby-sitting</option>
                                  <option value="carpooling">carpooling</option>
                                  <option value="shopping">shopping</option>
                                  <option value="private lesson">private lesson</option>
                                </select>
                              </div>
                              <div className="mb-3">
                              <h6 className="col-1" style={{marginTop:"10px"}}>Title  :</h6>
                                <input
                                  
                                  name="title"
                                  type="text"
                                  className="form-control"
                                  placeholder="Title"
                                  value={inpval.title} onChange={setdata}
                                />
                              </div>
                              <div className="mb-12">
                              
                                <input
                                  
                                  name="maxPart"
                                  type="text"
                                  className="form-control"
                                  placeholder="maximum number of participants"
                                  value={inpval.maxPart} onChange={setdata}
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
                                  value={inpval.governorate} onChange={setdata}
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
                                  value={inpval.city} onChange={setdata}
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
                                  value={inpval.zipcode} onChange={setdata}
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
                                value={inpval.description} onChange={setdata}
                              />
                            </div>
                            <div className="mb-6">
                                <h6 className="col-2">Disponibility  :</h6>
                                <div className="form-check form-check-inline">
    <input className="form-check-input" name="disponibility" onChange={setdata}type="checkbox" id="inlineCheckbox1" value="Everyday"/>
    <label className="form-check-label" htmlFor="inlineCheckbox1">everyday</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" name="weekend" onChange={setdata}type="checkbox" id="inlineCheckbox2" value="Weekend only"/>
    <label className="form-check-label" htmlFor="inlineCheckbox1">weekend only</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" name="day" onChange={setdata}type="checkbox" id="inlineCheckbox2" value="Day"/>
    <label className="form-check-label" htmlFor="inlineCheckbox1">day</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" name="night" onChange={setdata}type="checkbox" id="inlineCheckbox2" value="Night"/>
    <label className="form-check-label" htmlFor="inlineCheckbox1">night</label>
  </div></div>



                          </div>
                        </div>
                        <div className="col-6">
                        
                         
                       
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
                          <button  type="submit" className="btn btn-success" onClick={updateservice}>
                            update
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
                    <div className="col-sm-6">
                      <div className="text-sm-end d-none d-sm-block"></div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            {/* end main content*/}
          </div>
          {/* END layout-wrapper */}
          {/* Right Sidebar */}
         
          
        </div>
      </div>



    )
}



export default UpdateService;
    