import { useFetch } from './hooks/useFetch';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import ArticleCard from './components/ArticleCard';
import styles from './App.module.css';

import UserContext from './contexts/UserContext';

function App() {
  const {data: articlesAll} = useFetch('http://localhost:3030/jsonstore/advanced/articles/list', []);
  
  return (
    <UserContext.Provider value={{user: 'Pesho'}}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={styles['article-list']}>
        {/* {console.log(articlesAll)} */}
        {articlesAll.map(article => <ArticleCard key={article._id} {...article} />)}
      </div>
    </UserContext.Provider>
  )
}

export default App
