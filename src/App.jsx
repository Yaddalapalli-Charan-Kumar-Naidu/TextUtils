
import './App.css'
import Navbar from "./Navbar.jsx";
import TextArea from './TextArea.jsx';
import Alert from "./Alert.jsx"
import About from './About.jsx';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [styles,setStyles]=useState({backgroundColor:"white",color:"black"});
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  setTimeout(()=>{
    setAlert(null)
  },2000);
  const toggleMode=()=>{
    if(mode=="light"){
      setMode("dark");
      setStyles({backgroundColor:"#222222",color:"white"})
      setAlert("Switched to dark mode");
      console.log("dark mode on");
    }
    else{
      setMode("light");
      console.log("light mode on");
      setStyles({backgroundColor:"white",color:"black"});
      setAlert("Switched to light mode");
    }
  }
  return (
    <>
     {/* <Router> */}
    <div className="box" style={styles}>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} setStyles={setStyles}/>
      <Alert alert={alert}/>
      {/* <Routes>
          <Route exact path="/about" element={<About/>}></Route>

          <Route  exac path="/" element={<TextArea styles={styles} setAlert={setAlert}/>}></Route>
  
      </Routes> */}
      <TextArea styles={styles} setAlert={setAlert}/>
    </div>
    {/* </Router> */}
    </>
  )
}

export default App
