import React, { useState } from 'react';
import axios from "axios";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Register(){
    const [justifyActive, setJustifyActive] = useState('tab1');;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[_,setCookies] = useCookies(["access_token"])
    const navigate = useNavigate();
    
   
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
        return;
        }

        setJustifyActive(value);
    };
    const onSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3001/auth/login",{
                username,
                password,
            })
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");

        }catch(err){
            console.log(err);
        }
    }
    
    const onIt = async (event) =>{
        event.preventDefault();
        try{
            await axios.post("http://localhost:3001/auth/register",{
                username,
                password,
            })
            alert("Registration completed");

        }catch(err){
            console.log(err);
        }
    }
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
    
          <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
    
          <MDBTabsContent>
    
            <MDBTabsPane show={justifyActive === 'tab1'}>
            <form onSubmit={onSubmit}>
            <div className="text-center mb-3">
                <p>Sign in please:</p>
              </div>
              <div className="d-flex justify-content-between mx-4 mb-4">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(event)=> setUsername(event.target.value)} />
            </div>
            <div className="d-flex justify-content-between mx-4 mb-4">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
            </div>
              {/* <MDBInput wrapperClass='mb-4' htmlFor="username" label='Email address' id='username' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/> */}
    
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
    
              <button type="submit" className="mb-4 w-100 btn-primary">Sign in</button>
              
    
            </form>
              
            </MDBTabsPane>
    
            <MDBTabsPane  show={justifyActive === 'tab2'}>
              <form onSubmit={onIt}>
              <div className="text-center mb-3">
                <p>Sign up please:</p>
              </div>
    
                <div className="d-flex justify-content-between mx-4 mb-4">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(event)=> setUsername(event.target.value)} />
                </div>
                <div className="d-flex justify-content-between mx-4 mb-4">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
                </div>
    
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
              </div>
              
              <button type="submit" className="mb-4 w-100 btn-primary">Sign up</button>
              {/* //<MDBBtn >Sign up</MDBBtn> */}

              </form>
              
    
            </MDBTabsPane>
    
          </MDBTabsContent>
    
        </MDBContainer>
      );

      
}


export default Register;