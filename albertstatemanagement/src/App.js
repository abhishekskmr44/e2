import logo from './logo.svg';
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs';
import Search from './components/Search';
import Download from './components/Download';
import Help from './components/Help';
import Login from './components/Login';
import Settings from './components/Settings';
import Home from './components/Home';
import './App.css';





function App() {
  return (
    <div className="App">
       <JoinUs/>
       <Settings/>
       <Login/>
       <ContactUs/>
       <Search/>
       <Help/>
       <Home/>
       <Download/>
    </div>
  );
}

export default App;
