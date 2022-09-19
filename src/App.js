// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#282828';

      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.background = '#FFFFFF';

      showAlert('Light mode has been enabled', 'success');
    }
  }


  // diaplay alert code starts here!!
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar brand={"TextUtils"} aboutText={'About-TextUtils'} mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-4">
          <Routes>
              <Route path="/" exact element={<TextForm heading={'Enter the text to analyse below'} mode={mode} showAlert={showAlert}/>}/>
              <Route path="/about" exact element={<About/>} mode={mode}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

