
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState,Fragment } from 'react';
import Alert from './components/Alert';
// importing react router
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light'); //by default mode is Light .Its is a state variable which tells whether dark mode is enabled or not
  const [alert, setalert] = useState(null);//alert is an object
  
  //showAlert-function to show alert message
  //also we want to make the alert dissaper after 2 sec so for that use setTimeOut function
  const showAlert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

   setTimeout(() => {
     setalert(null);
   }, 3000);


  }

 const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
       document.body.style.backgroundColor = '#1d0c49';  //set the entire document color to grey when mode is turned from light to grey
       showAlert("Dark Mode has been enabled","success");//show the alert message when 
      // setInterval(() => {
      //   document.title='Text utils is amazing';
      //  }, 2000);
      //  setInterval(() => {
      //   document.title='Install Text utils Now.';
      //  }, 1500);
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  const toogleGreenMode=()=>{
    if(mode==='light'){
      setMode('green');
      document.body.style.backgroundColor = 'pink';
      showAlert("Green Mode has been enabled","success");
    }
  }
  return (
    <>
{/* <Router> */}
  {/* <Fragment> */}
{/* <Navbar title="TextUtils" abouttext="About TextUtils"/> */}
<Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
{/* container is a class of bootstrap which gives a different look as you can see in the screen  */}

<div className="container my-3">
    {/* <Routes> */}
      {/* reason to use exact keyword. 
      if we do not use it then by typing /users/home react will render component 1
       /users--->Component 1
      /users/home ----> component 2 */}
          {/* <Route exact path="/about"
            element={<About />}>
          </Route> */}

          {/* <Route exact path="/" */}
          <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
     {/* </Routes> */}
  {/* using showAlert here becoz we want to show alert when we do uppercase ,lowercase,clearText */}

{/* <About/>  */}
</div>
{/* </Fragment> */}
{/* </Router> */}
   </>
  );
}

export default App;
