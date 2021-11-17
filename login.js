
import React, { useState } from 'react';
import Axios from "axios";
import { Link, NavLink, useHistory } from "react-router-dom";


const Login = () => {
  let history = useHistory()
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });
  
 

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLogin({ ...userLogin, [name]: value });
  }
 
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/home');
    // setErrors (Validation_login(userLogin))
    
    // Axios.post("https://c230-115-166-143-82.ngrok.io/api/users/login", userLogin)
    //   .then((result) => {
    //   console.log(result);
    //   })
      // .then(function (response) {
      //   if(response.status == 200){
      //       alert("log in successful")         
      //   }
      // })
      
  }

  return (
    
    <section className=" bg-img">
      <div className="log_img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 form_lg ">
              <form action="" onSubmit={handleSubmit} className="form_login">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name="email"  
                    value={userLogin.email} onChange={handleInput}
                  />
                   
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" 
                    value={userLogin.password}
                    onChange={handleInput}
                  />
                
               
                </div>
                <div className="butn">
                  <button type="submit" className="btn btn-primary btn_Log">Login</button>
                  <Link to="/Registration" className="btn btn-success btn_Reg">registration</Link>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
      </section>
    
  )
}

export default Login;