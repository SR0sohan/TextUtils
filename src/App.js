
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <div>      
      <Navbar Title="TextUtils" About="About TextUtils"/>
      <div className="container">
        {/* <TextForm heading="Enter text to Analyze"/> */}
        <About/>
      </div>
    </div>
  );
}

export default App;
