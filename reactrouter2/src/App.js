import logo from './logo.svg';
import './App.css';
import {Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login';
import Feeds from './pages/Feeds';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path = "" element={<Home/>}/>
     <Route path = "/login" element={<Login/>}/>
     <Route path = "/feeds" element={<Feeds/>}/>
     </Routes>

    </div>
  );
}

export default App;
