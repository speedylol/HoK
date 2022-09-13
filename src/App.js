import './App.css';
import { BrowserRouter,
         Routes,
         Route,
         Link,
} from "react-router-dom";

import {Navbar, Nav, Container} from 'react-bootstrap';
import  Contribute  from './pages/Contribute';
import  News  from './pages/News';
import Services from './pages/Services';



function App() {
  return (

    <BrowserRouter>
    <div className='App'>
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


        <div>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/news" element={<News />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>


        <h2> About Us</h2>
    </div>
      
    </BrowserRouter>


      
      
   
  );
}

export default App;
