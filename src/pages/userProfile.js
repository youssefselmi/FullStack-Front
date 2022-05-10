import React , {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./listecomposant.css";


import Header from './pages/Header';




const userProfile = () => {


    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const id = localStorage.getItem("user_id")

    const history = useNavigate();

    const Logout = async () =>{
      history("/auth")
    }


    async function getdata() {

    const res = await fetch(`http://localhost:3000/users/${id}`, {
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
      setUserdata(data);
      console.log("get data");
    }
  }

    useEffect(() => {
        getdata();
    }, [])

    





















    return(
        <div>


<Header/>



            <div id="layout-wrapper">


                <header id="page-topbar">

                    <div class="d-flex">

                        <div class="navbar-brand-box">
                            <a href="index.html" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="assets/images/logo.svg" alt="" height="22"/>
                    </span>
                                <span class="logo-lg">
                    <img src="assets/images/loogo.png" alt="" height="55"/>
                    </span>
                            </a>

                            <a href="index.html" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="assets/images/logo-light.svg" alt="" height="22"/>
                    </span>
                                <span class="logo-lg">
                        <img src="assets/images/logo-light.png" alt="" height="19"/>
                    </span>
                            </a>
                        </div>

                        <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                            <i class="fa fa-fw fa-bars"></i>
                        </button>


                        <form class="app-search d-none d-lg-block">
                            <div class="position-relative">
                                <input type="text" class="form-control" placeholder="Search..."/>
                                <span class="bx bx-search-alt"></span>
                            </div>
                        </form>


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

                            <div class="dropdown d-inline-block">
                                <button type="button" class="btn header-item waves-effect"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16"/>
                                </button>

                            </div>

                            <div class="dropdown d-none d-lg-inline-block ms-1">
                                <button type="button" class="btn header-item noti-icon waves-effect"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="bx bx-customize"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                    <div class="px-lg-2">
                                        <div class="row g-0">
                                            <div class="col">
                                                <a class="dropdown-icon-item" href="#/">
                                                    <img src="assets/images/brands/github.png" alt="Github"/>
                                                    <span>GitHub</span>
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="dropdown-icon-item" href="#/">
                                                    <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                                    <span>Bitbucket</span>
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="dropdown-icon-item" href="#/">
                                                    <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                                    <span>Dribbble</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="row g-0">
                                            <div class="col">
                                                <a class="dropdown-icon-item" href="#/">
                                                    <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                                    <span>Dropbox</span>
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="dropdown-icon-item" href="#/">
                                                    <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                                                    <span>Mail Chimp</span>
                                                </a>
                                            </div>
                                            <div class="col">
                                                <a class="dropdown-icon-item" href="#/">
                                                    <img src="assets/images/brands/slack.png" alt="slack"/>
                                                    <span>Slack</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dropdown d-none d-lg-inline-block ms-1">
                                <button type="button" class="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                                    <i class="bx bx-fullscreen"></i>
                                </button>
                            </div>

                            <div class="dropdown d-inline-block">
                                <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="bx bx-bell bx-tada"></i>
                                    <span class="badge bg-danger rounded-pill">3</span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                     aria-labelledby="page-header-notifications-dropdown">
                                    <div class="p-3">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <h6 class="m-0" key="t-notifications"> Notifications </h6>
                                            </div>
                                            <div class="col-auto">
                                                <a href="#!" class="small" key="t-view-all"> View All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-simplebar >
                                        <a href="#/" class="text-reset notification-item">
                                            <div class="d-flex">
                                                <div class="avatar-xs me-3">
                                    <span class="avatar-title bg-primary rounded-circle font-size-16">
                                        <i class="bx bx-cart"></i>
                                    </span>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="mb-1" key="t-your-order">Your order is placed</h6>
                                                    <div class="font-size-12 text-muted">
                                                        <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#/" class="text-reset notification-item">
                                            <div class="d-flex">
                                                <img src="assets/images/users/avatar-3.jpg"
                                                     class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                                <div class="flex-grow-1">
                                                    <h6 class="mb-1">James Lemire</h6>
                                                    <div class="font-size-12 text-muted">
                                                        <p class="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#/" class="text-reset notification-item">
                                            <div class="d-flex">
                                                <div class="avatar-xs me-3">
                                    <span class="avatar-title bg-success rounded-circle font-size-16">
                                        <i class="bx bx-badge-check"></i>
                                    </span>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h6 class="mb-1" key="t-shipped">Your item is shipped</h6>
                                                    <div class="font-size-12 text-muted">
                                                        <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href="#/" class="text-reset notification-item">
                                            <div class="d-flex">
                                                <img src="assets/images/users/avatar-4.jpg"
                                                     class="me-3 rounded-circle avatar-xs" alt="user-pic"/>
                                                <div class="flex-grow-1">
                                                    <h6 class="mb-1">Salena Layfield</h6>
                                                    <div class="font-size-12 text-muted">
                                                        <p class="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="p-2 border-top d-grid">
                                        <a class="btn btn-sm btn-link font-size-14 text-center" href="#/">
                                            <i class="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="dropdown d-inline-block">
                                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                         alt="Header Avatar"/>
                                    <span class="d-none d-xl-inline-block ms-1" key="t-henry">{localStorage.getItem("firstName")}</span>
                                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end">

                                    <a class="dropdown-item" href="#/"><i class="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                                    <a class="dropdown-item" href="#/"><i class="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                                    <a class="dropdown-item d-block" href="#/"><span class="badge bg-success float-end">11</span><i class="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                                    <a class="dropdown-item" href="#/"><i class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item text-danger" href="#/"><i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                                </div>
                            </div>

                            <div class="dropdown d-inline-block">
                                <button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect">
                                    <i class="bx bx-cog bx-spin"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </header>



                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">


                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18 text-center">This is YOU !</h4>





                                    </div>
                                </div>
                            </div>







                            <div class="row">


                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                         
                                                <h4 className="card-title">Profile</h4>













                                                <div className="container mt-3">
                                                    <h1 style={{ fontWeight: 400 }}>Details </h1>

                                                    <div>
                                                        <div>
                                                            <div className="row">
                                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                                    <img src= {getuserdata.avatar} style={{ width: 200 }} alt="profile" />
                                                                    <h3 className="mt-3">First name: <span >{getuserdata.firstName}</span></h3>
                                                                    <h3 className="mt-3">Last name : <span >{getuserdata.lastName}</span></h3>
                                                                    <p className="mt-3">Email: <span>{getuserdata.email}</span></p>
                                                                    <p className="mt-3">Profession: <span>{getuserdata.profession}</span></p>
                                                                </div>
                                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                                     <p className="mt-3">Location : <span>{getuserdata.location}  </span></p>
                                                                    <p className="mt-3">Interests : <span>{getuserdata.interests}</span></p>
                                                                </div>
                                                                <button class="btn btn-danger" onClick={() => Logout()}> Logout</button>

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
                                    <script>document.write(new Date().getFullYear())</script> © ✮Afar✮.
                                </div>
                                <div class="col-sm-6">
                                    <div class="text-sm-end d-none d-sm-block">
                                        Design and Develop by SKOLLS
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
            <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
            <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
            <script src="assets/libs/jquery/jquery.min.js"></script>
            <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/libs/metismenu/metisMenu.min.js"></script>
            <script src="assets/libs/simplebar/simplebar.min.js"></script>
            <script src="assets/libs/node-waves/waves.min.js"></script>

            <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
            <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
            <script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
            <script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
            <script src="assets/libs/jszip/jszip.min.js"></script>
            <script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
            <script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
            <script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
            <script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
            <script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>

            <script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
            <script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

            <script src="assets/js/pages/datatables.init.js"></script>

            <script src="assets/js/app.js"></script>

            <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
            <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />

        </div>





    )


    }



export default userProfile;