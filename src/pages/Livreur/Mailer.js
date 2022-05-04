import emailjs from "emailjs-com";
import React from "react";
import { useHistory ,useNavigate} from "react-router-dom";
const Email = () => {
    const history = useNavigate();
    function sendEmail(e){
       
        e.preventDefault();
        
        emailjs.sendForm('service_8eypxck','template_cwcafmr',e.target,'KI5QKJoaI4zyYA6U-'
        ).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
        alert("Mail Send")
      
        history("/list")
    }
    return(
        <div className="container border"
        style={{marginTop:"50px",width:"50%",
        backgroundImage:'url("https://img.freepik.com/free-vector/send-email-concept_24908-60324.jpg?size=338&ext=jpg")',
        backgroundPosition:"center",
        backgroundSize:"cover",
        }}>
            <h1 className="col-3" style={{marginTop:'25px'}} >Report</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
            <label className="col-1">Subject</label>
            <input type="text" name="name" className="form-control"/>
            
            <label className="col-1">Message</label>
            <textarea name="message" rows="4" className="form-control" />
            <input type="submit" value="send" className="form-control btn btn-primary"
            style={{marginTop:"30px"}}/>
            </form>
        </div>

    )
}
export default Email;