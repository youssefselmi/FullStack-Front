import React , {useState,useEffect,useContext} from "react";
import { Link, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from "../context/ContextProvider";
import Header from '../../pages/Header';

const UpdateLivreur = () => {


    const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");

    const [inpval, setINP] = useState({
        nom: "",
        prenom: "",
        num:"",
        addr:"",
        veicule:"",
        password:"",
        region:"",
        modele:"",
        email:"",
        type:"",
       
   
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

        const res = await fetch(`https://fullstack-back-app.herokuapp.com/livreur/${id}`, {
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


    const updatelivreur = async(e)=>{
        e.preventDefault();



        const {nom,prenom,num,addr,veicule,password,region,modele,email,type,picture} = inpval;

        const res2 = await fetch(`https://fullstack-back-app.herokuapp.com/livreur/updatelivreur/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                nom,prenom,num,addr,veicule,password,region,modele,email,type,picture
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            history("/list")
          //  setUPdata(data2);
        }

    }
    



    
    return(
        <div>
      {/* Mirrored from themesbrand.com/skote-django/layouts/auth-register.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:52 GMT */}
      <meta charSet="utf-8" />
      <title>Register | Skote - Admin &amp; Dashboard Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
      <meta content="Themesbrand" name="author" />
      {/* App favicon */}
      <link rel="shortcut icon" href="assets/images/favicon.ico" />
      {/* Bootstrap Css */}
      <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
      {/* Icons Css */}
      <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
      {/* App Css*/}
      <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-primary bg-soft">
                  <div className="row">
                  <Header/>

                    <div className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Update</h5>
                        <p>update your information now</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0"> 
                  <div>
                    <a href="index.html">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src="assets/images/logo.svg" alt="" className="rounded-circle" height={34} />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2">
                    <form   >
                      <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="nom"value={inpval.nom} onChange={setdata} />
                        <div className="invalid-feedback">
                          Please Enter First name
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="prenom"  value={inpval.prenom} onChange={setdata} />
                        <div className="invalid-feedback">
                          Please Enter Last name
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Age</label>
                        <input type="text" className="form-control" name="prenom"  value={inpval.age} onChange={setdata} />
                        <div className="invalid-feedback">
                          Please Enter Last Age
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" name="num" value={inpval.num} onChange={setdata} />
                        <div className="invalid-feedback">
                          Please Enter Phone Number
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="adress" className="form-label">Adress</label>
                        <input type="text" className="form-control" name="addr" value={inpval.addr} onChange={setdata} />
                        <div className="invalid-feedback">
                          Please Enter Adress
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="region" className="form-label">Region</label>
                        <input type="text" className="form-control" name="region"value={inpval.region} onChange={setdata} />
                        <div className="invalid-feedback">
                          Please Enter Region
                        </div>  
                      </div>
                      <div className="mb-3">
                        <label htmlFor="vehicle"   className="form-label">Vehicle</label>
                      </div>
                      <div className="mb-3">
                      <select name="type" value={inpval.type} onChange={setdata}  >
                          <option value>Please choose Type</option>
                          <option value="Isuzu">Isuzu</option>
                          <option value="Peugeot">Peugeot</option>
                          <option value="Volswagen">Volswagen</option>
                          <option value="Ford">Ford</option>
                        </select>
                        <select name="model" value={inpval.modele} onChange={setdata}  >
                          <option value>Please choose Model</option>
                          <option value="dog">2010</option>
                          <option value="2011">2011</option>
                          <option value="2012">2012</option>
                          <option value="2013">2013</option>
                        </select>
                      </div>     
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={inpval.email} onChange={setdata}/>  
                        <div className="invalid-feedback">
                          Please Enter Email
                        </div>      
                      </div>
                      <div className="mb-3">
                        <label htmlFor="userpassword" className="form-label">Password</label>
                        <input type="password" className="form-control" value={inpval.password} onChange={setdata}/>
                        <div className="invalid-feedback">
                          Please Enter Password
                        </div>       
                      </div>
                    
                      
                      <div>
                          
                      <Link to={`/list`}>
                        <button
                            type="button"
                            className="btn btn-secondary waves-effect waves-light"
                            style={{marginRight:"10px"}}
                          >
                            Cancel
                          </button>
                          </Link>
                      <button  type="submit" className="btn btn-success" onClick={updatelivreur}>
                            update
                          </button>
                          </div>
                      
                      
                    </form>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* JAVASCRIPT */}
      {/* validation init */}
      {/* App js */}
      {/* Mirrored from themesbrand.com/skote-django/layouts/auth-register.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:52 GMT */}
    </div>
  )}


  


export default UpdateLivreur;