import React from 'react'
import {Route, Navigate } from "react-router-dom"


 const PrivateRoute = ({component :Component,...rest}) => {
     const checkAuth =  localStorage.getItem("checkAuth")
    return (
        <Route
            {...rest}
            render = {props =>{
                if(checkAuth){
                return <Component {...props}/>          
                }
            else {
                return <Navigate {...props}
                to={{
                    pathname:"/",
                    state :{
                        from: props.location
                    }
                }}/>
            }
        }}

        /> //
       
    )
}

export default PrivateRoute;   