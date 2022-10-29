import './App.css';
import { BrowserRouter,
         Routes,
         Route,
         Link,
} from "react-router-dom";

import {Navbar, Nav, Container} from 'react-bootstrap';
//import AppRouter from './components/AppRouter';
import  Contribute  from './pages/Contribute';
import  News  from './pages/News';
import Services from './pages/Services';
import Home from './pages/home'


function App() {
  return (

    
    <>
    <div class="header-banner"> </div>

    
      <BrowserRouter>
        <Navbar bg="light" expand="lg" sticky='top'>
          <Container>
            <Navbar.Brand href="#home">House of Kanautica</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">About Us</Nav.Link>
                <Nav.Link as={Link} to="/news">News</Nav.Link>
                <Nav.Link as={Link} to="/contribute"> Donate </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/services" element={<Services />} />
          </Routes>




    </BrowserRouter>

    
    <footer className="footer"> 
            <div className='container'>
              <div className='row'>
                  <div className='footer-col'>
                    <h4> House of Kanautica </h4>
                    <ul>
                      <li> <a href='#'> About us </a></li>

                      <li> <a href='#'> News </a></li>

                      <li> <a href='/contribute'> Donate </a></li>

                      <li> <a href={'#'}> Site by Nada Merghani and Malcolm Speed </a></li>
                    </ul>
                  </div>

                  <div className='footer-col'>
                    <h4> Follow Us </h4>
                    <div className='socials'>
                      <li> <a href='#'> <i class="fab fa-instagram"> </i>  </a></li>
                    </div>
                  </div>
              </div>

            </div>
          </footer>



     </>
   
  );
}

export default App;
