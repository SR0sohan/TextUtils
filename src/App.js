
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>      
      <Navbar Title="TextUtils" About="About TextUtils"/>
      <div className="container">
        <TextForm heading="Enter text to Analyze"/>
      </div>
    </div>
  );
}

export default App;
