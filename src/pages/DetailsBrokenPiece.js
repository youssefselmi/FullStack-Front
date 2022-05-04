import React, {useContext, useEffect, useState} from "react";
import "./listecomposant.css";
import {BrowserRouter, Route, Link, useNavigate,NavLink,useParams} from "react-router-dom";
import "./listecomposant.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import { CardTravel, PaidRounded } from "@mui/icons-material";


///////////////////////////////////////////
import axios from "axios";
import "./payment.css";

const DetailsBrokenPiece = () => {

    


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

    const deleteuser = async (id) => {

        const res2 = await fetch(`https://fullstack-back-app.herokuapp.com/composant/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            history.push("/listecomposant");
        }

    }




    ////////////////////////////////////// Payment //////////////////////////////////
    const initPayment = (data) => {
		const options = {
			key: "rzp_test_NDxygbn7Cd7N9l",
			amount: data.amount,
			currency: data.currency,
			name: getuserdata.Name,
			description: "Test Transaction",
			image: getuserdata.Image,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "https://fullstack-back-app.herokuapp.com/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};


    const handlePayment = async () => {
		try {
			const orderUrl = "https://fullstack-back-app.herokuapp.com/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: getuserdata.Prix });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};


///////////////////////////////////////////////////////////////////////////////////////////////









        return (
            <div>
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

                            <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect"
                                    id="vertical-menu-btn">
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
                                    <button type="button" class="btn header-item noti-icon waves-effect"
                                            id="page-header-search-dropdown"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-magnify"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                         aria-labelledby="page-header-search-dropdown">

                                        <form class="p-3">
                                            <div class="form-group m-0">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search ..."
                                                           aria-label="Recipient's username"/>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary" type="submit"><i
                                                            class="mdi mdi-magnify"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="dropdown d-inline-block">
                                    <button type="button" class="btn header-item waves-effect"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language"
                                             height="16"/>
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
                                                        <img src="assets/images/brands/mail_chimp.png"
                                                             alt="mail_chimp"/>
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
                                    <button type="button" class="btn header-item noti-icon waves-effect"
                                            data-bs-toggle="fullscreen">
                                        <i class="bx bx-fullscreen"></i>
                                    </button>
                                </div>

                                <div class="dropdown d-inline-block">
                                    <button type="button" class="btn header-item noti-icon waves-effect"
                                            id="page-header-notifications-dropdown"
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
                                        <div data-simplebar>
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
                                                            <p class="mb-1" key="t-grammer">If several languages
                                                                coalesce the grammar</p>
                                                            <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span
                                                                key="t-min-ago">3 min ago</span></p>
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
                                                            <p class="mb-1" key="t-simplified">It will seem like
                                                                simplified English.</p>
                                                            <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span
                                                                key="t-hours-ago">1 hours ago</span></p>
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
                                                            <p class="mb-1" key="t-grammer">If several languages
                                                                coalesce the grammar</p>
                                                            <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span
                                                                key="t-min-ago">3 min ago</span></p>
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
                                                            <p class="mb-1" key="t-occidental">As a skeptical Cambridge
                                                                friend of mine occidental.</p>
                                                            <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span
                                                                key="t-hours-ago">1 hours ago</span></p>
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
                                    <button type="button" class="btn header-item waves-effect"
                                            id="page-header-user-dropdown"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img class="rounded-circle header-profile-user"
                                             src="assets/images/users/avatar-1.jpg"
                                             alt="Header Avatar"/>
                                        <span class="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                                        <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-end">

                                        <a class="dropdown-item" href="#/"><i
                                            class="bx bx-user font-size-16 align-middle me-1"></i> <span
                                            key="t-profile">Profile</span></a>
                                        <a class="dropdown-item" href="#/"><i
                                            class="bx bx-wallet font-size-16 align-middle me-1"></i> <span
                                            key="t-my-wallet">My Wallet</span></a>
                                        <a class="dropdown-item d-block" href="#/"><span
                                            class="badge bg-success float-end">11</span><i
                                            class="bx bx-wrench font-size-16 align-middle me-1"></i> <span
                                            key="t-settings">Settings</span></a>
                                        <a class="dropdown-item" href="#/"><i
                                            class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span
                                            key="t-lock-screen">Lock screen</span></a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item text-danger" href="#/"><i
                                            class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                                            <span key="t-logout">Logout</span></a>
                                    </div>
                                </div>

                                <div class="dropdown d-inline-block">
                                    <button type="button"
                                            class="btn header-item noti-icon right-bar-toggle waves-effect">
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
                                        <div
                                            class="page-title-box d-sm-flex align-items-center justify-content-between">
                                            <h4 class="mb-sm-0 font-size-18">Products</h4>

                                            <div class="page-title-right">
                                                <ol class="breadcrumb m-0">
                                                    <li class="breadcrumb-item"><a href="#/">Ecommerce</a></li>
                                                    <li class="breadcrumb-item active">Products</li>
                                                </ol>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title mb-4">Filter</h4>

                                                <div>
                                                    <h5 class="font-size-14 mb-3">Clothes</h5>
                                                    <ul class="list-unstyled product-list">
                                                        <li><a href="#/"><i
                                                            class="mdi mdi-chevron-right me-1"></i> T-shirts</a></li>
                                                        <li><a href="#/"><i
                                                            class="mdi mdi-chevron-right me-1"></i> Shirts</a></li>
                                                        <li><a href="#/"><i
                                                            class="mdi mdi-chevron-right me-1"></i> Jeans</a></li>
                                                        <li><a href="#/"><i
                                                            class="mdi mdi-chevron-right me-1"></i> Jackets</a></li>
                                                    </ul>
                                                </div>
                                                <div class="mt-4 pt-3">
                                                    <h5 class="font-size-14 mb-3">Price</h5>
                                                    <input type="text" id="pricerange"/>
                                                </div>

                                                <div class="mt-4 pt-3">
                                                    <h5 class="font-size-14 mb-3">Discount</h5>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck1"/>
                                                        <label class="form-check-label" for="productdiscountCheck1">
                                                            Less than 10%
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck2"/>
                                                        <label class="form-check-label" for="productdiscountCheck2">
                                                            10% or more
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck3" checked/>
                                                        <label class="form-check-label" for="productdiscountCheck3">
                                                            20% or more
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck4"/>
                                                        <label class="form-check-label" for="productdiscountCheck4">
                                                            30% or more
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck5"/>
                                                        <label class="form-check-label" for="productdiscountCheck5">
                                                            40% or more
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck6"/>
                                                        <label class="form-check-label" for="productdiscountCheck6">
                                                            50% or more
                                                        </label>
                                                    </div>

                                                </div>

                                                <div class="mt-4 pt-3">
                                                    <h5 class="font-size-14 mb-3">Customer Rating</h5>
                                                    <div>
                                                        <div class="form-check mt-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                   id="productratingCheck1"/>
                                                            <label class="form-check-label" for="productratingCheck1">
                                                                4 <i class="bx bxs-star text-warning"></i> and Above
                                                            </label>
                                                        </div>
                                                        <div class="form-check mt-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                   id="productratingCheck2"/>
                                                            <label class="form-check-label" for="productratingCheck2">
                                                                3 <i class="bx bxs-star text-warning"></i> and Above
                                                            </label>
                                                        </div>
                                                        <div class="form-check mt-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                   id="productratingCheck3"/>
                                                            <label class="form-check-label" for="productratingCheck3">
                                                                2 <i class="bx bxs-star text-warning"></i> and Above
                                                            </label>
                                                        </div>

                                                        <div class="form-check mt-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                   id="productratingCheck4"/>
                                                            <label class="form-check-label" for="productratingCheck4">
                                                                1 <i class="bx bxs-star text-warning"></i>
                                                            </label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-9">

                                        <div class="row mb-3">
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="mt-2">
                                                    <h5>BROKEN</h5>
                                                </div>
                                            </div>

                                            <div class="col-lg-8 col-sm-6">
                                                <form class="mt-4 mt-sm-0 float-sm-end d-sm-flex align-items-center">
                                                    <div class="search-box me-2">
                                                        <div class="position-relative">
                                                            <input type="text" class="form-control border-0"
                                                                   placeholder="Search..."/>
                                                            <i class="bx bx-search-alt search-icon"></i>
                                                        </div>
                                                    </div>
                                                    <ul class="nav nav-pills product-view-nav justify-content-end mt-3 mt-sm-0">
                                                        <li class="nav-item">
                                                            <a class="nav-link active" href="#/"><i
                                                                class="bx bx-grid-alt"></i></a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#/"><i class="bx bx-list-ul"></i></a>
                                                        </li>
                                                    </ul>


                                                </form>
                                            </div>
                                        </div>
                                        <div class="row">












                                        <div className="container mt-3">
                                                    <h1 style={{ fontWeight: 400 }}>{getuserdata.Name}</h1>

                                                           
                                                            <div className="row">
                                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                                    <img src="{{getuserdata.Image}}" style={{ width: 50 }} alt="profile" />
                                                                    <h3 className="mt-3">Name: <span >{getuserdata.Name}</span></h3>
                                                                    <p className="mt-3"><MailOutlineIcon />Description: <span>{getuserdata.Description}</span></p>
                                                                    <p className="mt-3"><WorkIcon />Marque: <span>{getuserdata.Marque}</span></p>
                                                                </div>
                                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                                    <p className="mt-5">Etat: <span> {getuserdata.Etat}</span></p>
                                                                    <p className="book_price">Prix: <span>{getuserdata.Prix}  DT </span></p>
                                                                    <p className="mt-3">Description: <span>{getuserdata.Description}</span></p>
                                                                </div>
                                                            </div>
                                                            <div >
                                                                 <button onClick={handlePayment} className="btn buy_btn mx-2"><PaidRounded /> Buy Now!</button>
                                                            </div>

                                                </div>











                                        </div>





                                        <div class="row">
                                            <div class="col-lg-12">
                                                <ul class="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1">
                                                    <li class="page-item disabled">
                                                        <a href="#/" class="page-link"><i
                                                            class="mdi mdi-chevron-left"></i></a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a href="#/" class="page-link">1</a>
                                                    </li>
                                                    <li class="page-item active">
                                                        <a href="#/" class="page-link">2</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a href="#/" class="page-link">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a href="#/" class="page-link">4</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a href="#/" class="page-link">5</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a href="#/" class="page-link"><i
                                                            class="mdi mdi-chevron-right"></i></a>
                                                    </li>
                                                </ul>
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
                                        <script>document.write(new Date().getFullYear())</script>
                                        © Skote.
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


                        <hr class="mt-0"/>
                        <h6 class="text-center mb-0">Choose Layouts</h6>

                        <div class="p-4">
                            <div class="mb-2">
                                <img src="assets/images/layouts/layout-1.jpg" class="img-thumbnail"
                                     alt="layout images"/>
                            </div>

                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input theme-choice" type="checkbox" id="light-mode-switch"
                                       checked/>
                                <label class="form-check-label" for="light-mode-switch">Light Mode</label>
                            </div>

                            <div class="mb-2">
                                <img src="assets/images/layouts/layout-2.jpg" class="img-thumbnail"
                                     alt="layout images"/>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input theme-choice" type="checkbox" id="dark-mode-switch"/>
                                <label class="form-check-label" for="dark-mode-switch">Dark Mode</label>
                            </div>

                            <div class="mb-2">
                                <img src="assets/images/layouts/layout-3.jpg" class="img-thumbnail"
                                     alt="layout images"/>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
                                <label class="form-check-label" for="rtl-mode-switch">RTL Mode</label>
                            </div>

                            <div class="mb-2">
                                <img src="assets/images/layouts/layout-4.jpg" class="img-thumbnail"
                                     alt="layout images"/>
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
        )
}
export default DetailsBrokenPiece;