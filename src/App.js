import "./App.css";
import About from "./components/About.js";
import Alert  from "./components/Alert";
import Navbar from "./components/Navbar.js";
import TextForm from './components/TextForm.js'
import React ,{useState} from 'react'
//npm i react-router-dom 
//go to the quick start section copy the below codes routes is used at the place of switch now
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


//this function is used to apply dark modeon navbar and Textform
function App() {
  const[mode,setmode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
   setTimeout(()=>{              //this is used to remove alert after 2 second
    setAlert(null)
   },2000)
  }
  //this is used to make changes on background color on click withot reloading
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }
  const togglemode=(cls)=>{
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
      // document.title='TextUtils -Light Mode'
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success");
      // document.title='TextUtils -Dark Mode'
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* //go to the react router dom website and also change a to Link and href to to*/}
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route path="/home" element={<TextForm heading="Try TextUtils-Word Counter,Character Counter" mode={mode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
       </div>
       </Router>
    </>
  );
}

export default App;
