import React , {useState,useEffect,useContext} from "react";
import "./listecomposant.css";
import Menu from "./menu";
import {useNavigate, useParams} from "react-router-dom";



const ComposantDetailFront = () => {


    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const history = useNavigate();


    const getdata = async () => {

        const res = await fetch(`https://fullstack-back-app.herokuapp.com/composant/find/${id}`, {
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
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])











    return(


        <div>

            <div id="layout-wrapper">
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>

                    <div class="navbar-header">
                        <div class="d-flex">








                            <div class="d-flex">

                                <div class="dropdown d-inline-block d-lg-none ms-2">
                                    <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-magnify"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                         aria-labelledby="page-header-search-dropdown">

                                        <form class="p-3">
                                            <div class="form-group m-0">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                                        <div class="input-group-append">
                                                            <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                                                        </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>











                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">

                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18">Product Detail</h4>

                                        <div class="page-title-right">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                                <li class="breadcrumb-item active">Product Detail</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-xl-6">
                                                    <div class="product-detai-imgs">
                                                        <div class="row">



                                                            <div class="col-md-7 offset-md-1 col-sm-9 col-8">
                                                                <div class="tab-content" id="v-pills-tabContent">
                                                                    <div class="tab-pane fade show active" id="product-1" role="tabpanel" aria-labelledby="product-1-tab">
                                                                        <div>
                                                                            <img src="assets/images/product/img-7.png" alt="" class="img-fluid mx-auto d-block"/>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="text-center">
                                                                    <button type="button" class="btn btn-primary waves-effect waves-light mt-2 me-1">
                                                                        <i class="bx bx-cart me-2"></i> Add to cart
                                                                    </button>
                                                                    <button type="button" class="btn btn-success waves-effect  mt-2 waves-light">
                                                                        <i class="bx bx-shopping-bag me-2"></i>Buy now
                                                                    </button>
                                                                </div>

                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-xl-6">
                                                    <div class="mt-4 mt-xl-3">
                                                        <a href="javascript: void(0);" class="text-primary">{getuserdata.Name}</a>
                                                        <h4 class="mt-1 mb-3">{getuserdata.Name}</h4>


                                                        <p class="text-muted mb-4">( 152 Customers Review )</p>

                                                        <h6 class="text-success text-uppercase">20 % Off</h6>
                                                        <h5 class="mb-4">Price : <span class="text-muted me-2"><del>$240 USD</del></span> <b>{getuserdata.Prix} TND</b></h5>
                                                        <p class="text-muted mb-4">{getuserdata.Description}</p>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div>
                                                                    <p class="text-muted"><i class="bx bx-unlink font-size-16 align-middle text-primary me-1"></i> Wireless</p>
                                                                    <p class="text-muted"><i class="bx bx-shape-triangle font-size-16 align-middle text-primary me-1"></i> Wireless Range : 10m</p>
                                                                    <p class="text-muted"><i class="bx bx-battery font-size-16 align-middle text-primary me-1"></i> Battery life : 6hrs</p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div>
                                                                    <p class="text-muted"><i class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i> Bass</p>
                                                                    <p class="text-muted"><i class="bx bx-cog font-size-16 align-middle text-primary me-1"></i> Warranty : 1 Year</p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
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
                                        Design & Develop by Themesbrand
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
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
        </div>
)

            }

export default ComposantDetailFront;