import './App.css';
import Homepage from './customer/Pages/Homepage/Homepage';
import Navbar from './customer/components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div>
       <Homepage/>
     </div>
    </div>
  );
}

export default App;
