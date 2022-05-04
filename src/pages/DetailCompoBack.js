import React , {useState,useEffect,useContext} from "react";
import {BrowserRouter, Route, Link, useNavigate,NavLink,useParams} from "react-router-dom";
import "./listecomposant.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import { CardTravel, PaidRounded } from "@mui/icons-material";
import Header from '../pages/Header';


///////////////////////////////////////////
import axios from "axios";
import "./payment.css";
/////////////////////////////////////////////////////////

const DetailCompoBack = () => {



const PF= process.env.REACT_APP_PUBLIC_FOLDER;
console.log(PF);

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
			description: getuserdata.Etat,
			image: PF+getuserdata.Image,
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

    return(
        <div>
            <div id="layout-wrapper">




            <Header/>












                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">


                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 class="mb-sm-0 font-size-18 text-center">Detail de la Piece</h4>





                                    </div>
                                </div>
                            </div>







                            <div class="row">


                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                                <Link to={`/afficher`}>

                                                    <button  type="button" className="btn btn-danger btn-block waves-effect waves-light rog "
                                                             data-bs-toggle="modal" data-bs-target="#composemodal">
                                                        Return To list 
                                                    </button>
                                                </Link>













                                                <div className="container mt-3">
                                                    <h1 style={{ fontWeight: 400 }}>{getuserdata.Name}</h1>

                                                           
                                                            <div className="row">
                                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                                    <img src={PF+getuserdata.Image} style={{ width: 50 }} alt="profile" />
                                                                    <h3 className="mt-3">Name: <span >{getuserdata.Name}</span></h3>
                                                                    <p className="mt-3"><MailOutlineIcon />Description: <span>{getuserdata.Description}</span></p>
                                                                    <p className="mt-3"><WorkIcon />Marque: <span>{getuserdata.Marque}</span></p>
                                                                </div>
                                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                                    <p className="mt-5">Gategorie: <span> {getuserdata.Etat}</span></p>
                                                                    <p className="book_price">Prix: <span>{getuserdata.Prix}  DT </span></p>
                                                                    <p className="mt-3">Description: <span>{getuserdata.Description}</span></p>
                                                                </div>
                                                            </div>
                                                            <div >
                                                                 <button onClick={handlePayment} className="btn buy_btn mx-2"><PaidRounded /> Buy Now!</button>
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



export default DetailCompoBack;