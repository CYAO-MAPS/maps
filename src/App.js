import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as HashRouter, Routes, Route} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Home from './screens/Home';
import Benefits from './screens/Benefits';
import Team from './screens/Team';
import Technology from './screens/Technology';
import Market from './screens/Market';
import ContactUs from './screens/ContactUs';
import Footer from './components/Footer';


function App() {
  
  return (
    <HashRouter>
      <div className="App">
      
        <div className = "Sidebar">
          <NavBar/>
        </div>

        <div className="Content">

        {/* <Routes>
            <Route path='/'  element={<Home/>}></Route>
            <Route path='/benefits'  element={<Benefits/>}></Route>
            <Route path='/how'  element={<How/>}></Route>
            <Route path='/market'  element={<Market/>}></Route>
            <Route path='/team'  element={<Team/>}></Route>
            <Route path='/contactus'  element={<ContactUs/>}></Route>
        </Routes> */}
          
          <section id="home">
            <Home/>
          </section>
          <section id="benefits">
            <Benefits/>
          </section>
          <section id="how">
            <Technology/>
            </section>
          <section id="market">
            <Market/>
            </section>
          <section id="team">
            <Team/>
            </section>
          <section id="contactus">
            <ContactUs/>
            </section>

        </div>

        {/* <div className="Footer">
          <Footer/>
        </div> */}
        
      
      </div>
    </HashRouter>

  );
}

export default App;
