import './App.css';
// import DarkMode from './Components/DarkMode';
import './Components/TextForm.css';
// import Banner from './Components/Banner';
// import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Navbar2 from './Components/Navbar2';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('primary');
  const [modeBtnText, setModeBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1000);
  }

  const toggleMode = () =>{
    if (mode === 'primary') {
      setMode('dark');
      setModeBtnText('Disable Dark Mode');
      document.body.style.backgroundColor = '#393e46';
      showAlert('Dark Mode has been enabled', 'success');
    } else {
      setMode('primary');
      setModeBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Has Been Enabled', 'success');
    }
  }
  return (
      <>
        {/* <Navbar mode={mode} toggleMode={toggleMode}></Navbar> */}
        <Navbar2 mode={mode} toggleMode={toggleMode} modeBtnText={modeBtnText}></Navbar2>
        <Alert alert={alert}/>
        {/* <Banner></Banner> */}
        <TextForm showAlert={showAlert} heading="Elevate Your Style with Every Word!" mode={mode} toggleMode={toggleMode}></TextForm>
        {/* <DarkMode></DarkMode> */}
      </>
  );
}

export default App;