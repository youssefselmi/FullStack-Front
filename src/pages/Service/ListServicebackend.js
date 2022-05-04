import React , {useState,useEffect,useContext} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


import Axios from "axios";
import axios from "axios";
import {toast} from "react-toastify";
import { updatedata } from "../context/ContextProvider";


import Header from '../../pages/Header';




const ListServicebackend = () => {
   

    const [data, setData] = useState([]);

    useEffect(()=>{
            getServices();
        },[]
    );

    const getServices = async () => {
        const response = await axios.get("https://fullstack-back-app.herokuapp.com/service/list");
        if (response.status === 200){
            setData(response.data);
        }
    };

    console.log("data =>", data);



    const onDeleteService = async (id) => {

        if(window.confirm("Are you sure to delete this service"))
        {

            const response = await axios.delete(`https://fullstack-back-app.herokuapp.com/service/delete/${id}`);
            if (response.status === 200)
            {
                toast.success(response.data);
                getServices();
            }
        }



    }
    const {updata, setUPdata} = useContext(updatedata);



    return(
        <div>




            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.title}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }





            <div id="layout-wrapper">

            <Header/>




                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">


                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18 text-center">List of service</h4>





                                    </div>
                                </div>
                            </div>







                            <div class="row">


                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                                
                                                <h4 className="card-title">List of service</h4>


                                                <table id="datatable"
                                                       className="table table-bordered dt-responsive  nowrap w-100 styled-table">
                                                    <thead>
                                                    <tr>
                                                        <th>index</th>
                                                        <th>type</th>
                                                        <th>title</th>
                                                        <th>description</th>
                                                        <th>max number of participants</th>
                                                        <th>governorate</th>
                                                        <th>city</th>
                                                        <th>zipcode</th>
                                                        <th>disponibility</th>
                                                        <th>signal</th>
                                                        <th>Actions</th>


                                                    </tr>
                                                    </thead>


                                                    <tbody>
                                                    {data && data.map((service,index) => {
                                                        return (

                                                            <tr key={index}>
                                                                <th>{index+1}</th>
                                                                <td>{service.type}</td>
                                                                <td>{service.title}</td>
                                                                <td>{service.description}</td>
                                                                <td>{service.maxPart}</td>
                                                                <td>{service.governorate}</td>
                                                                <td>{service.city}</td>
                                                                <td>{service.zipcode}</td>
                                                                <td>
                                                                    <tr>{service.disponibility}</tr>
                                                                    <tr>{service.weekend}</tr>
                                                                    <tr>{service.day}</tr>
                                                                    <tr>{service.night}</tr></td>
                                                                <td>{service.signal}</td>




                                                                <td>

                                                                   

                                                                <button class="btn btn-danger" onClick={() => onDeleteService(service._id)}> Delete</button>   
                                                                    
                                                                    </td>
                                                                    

                                                            </tr>

                                                        )
                                                    })}


                                                    </tbody>
                                                </table>

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
                                    <script>document.write(new Date().getFullYear())</script> © Afar.
                                </div>
                                
                            </div>
                        </div>
                    </footer>
                </div>


            </div>
</div>











            



            

















    )











}



export default ListServicebackend;