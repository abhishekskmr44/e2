import './App.css';
import Navbar from './components/Navbar';
import { Offers } from './components/Offers';
import Restaurants from './components/Restaurants';
import Filters from './components/Filters';


function App() {
  return (
    <div>
     <Navbar/>
     <Offers/>
     <section class="near-you">
     <Filters/>
     <Restaurants/>
     </section>
    </div>
  );
}

export default App;
