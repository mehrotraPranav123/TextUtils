import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"



function App() {
  const [mode, setMode] = useState("light");
   
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
        setAlert({
          msg: message,
          type: type
        })

        setTimeout(()=>{
          setAlert(null);
        },1000)
  }

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success")
    }
  };

  return (
    <>
      {/* Pass mode and toggleMode function to Navbar */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutTexts="About TextUtils" />
      <Alert alert={alert}/>

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;



