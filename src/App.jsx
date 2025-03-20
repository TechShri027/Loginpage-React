import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css'
import * as React from 'react';
import { grey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  

  return (
    <>

    <div className="card" >
      <form action="">
      <h2>Welcome to</h2>
      <h1>Design School</h1>
<div className="buttons">
<button>Login with Google</button>
      <br />
      <button>Login with Facebook</button>
      <TextField id="filled-basic" label="Email" variant="filled" sx={{width:"80%",marginTop:"20px",fontWeight:"200px"}} />
     
      <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          sx={{width:"80%",marginTop:"20px" , fontWeight:"200px"}} 
        />

       <div className="inp">
        <li><input type="checkbox" name="" id="checkbox" style={{backgroundColor:"gray"}} /><span>Remember me </span></li>
        <li style={{color:"rgb(98, 88, 220)"}}>Forgot password?</li>
        </div> 

        <Button variant="contained" sx={{backgroundColor:'rgb(98, 88, 220)', marginTop:"20px"}}>Login</Button>

       <div style={{fontSize:"12px",marginTop:"20px"}}>Don't have an account?<span style={{color:"rgb(98,88,220)"}}>Register</span></div>
    </div>

     



      </form>
     


    </div>
    </>
  )
}

export default App
