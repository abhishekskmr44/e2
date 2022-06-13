import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from '../src/pages/Home'
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="App flex">
      
       
        <AuthProvider>
        <Navbar/>
        <Routes>
         
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </AuthProvider>
       
    </div>
  );
}

export default App;
