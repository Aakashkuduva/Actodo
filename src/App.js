import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import Signup from "./components/pages/signin";
import Landing from "./components/pages/landing";
import { useState } from "react";

function App()
{

   const[user,setuserlist] = useState([{
        username :"Aakash",
        password:"123"

    }])

  return(
 <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login user = {user} setuserlist ={setuserlist} />} />
        <Route path="/signup" element={<Signup user = {user} setuserlist ={setuserlist} />} />
        <Route path="/landing"element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
  
}

export default App;



