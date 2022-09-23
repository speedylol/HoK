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
    
    <div className='App'>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">House of Kanautica</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">About Us</Nav.Link>
                <Nav.Link as={Link} to="/news">News</Nav.Link>
                <Nav.Link as={Link} to="/contribute"> Contribute </Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
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
    </div>

     </>
   
  );
}

export default App;
