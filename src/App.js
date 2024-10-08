import './App.css';
import './Components/TextForm.css';
// import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
      <>
        <Navbar></Navbar>
        {/* <Banner></Banner> */}
        <TextForm heading="Elevate Your Style with Every Word!"></TextForm>
      </>
  );
}

export default App;