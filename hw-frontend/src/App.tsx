import React, {Fragment, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import { LogIn, Home, AddProduct } from './Pages';
import { Container } from 'react-bootstrap';
import { IUser } from './Interfaces';

function App() {
  const [currentUser, setCurrentUSer] = useState<IUser|null>(null);

  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<NavBar currentUser={currentUser} onLogOut={()=> setCurrentUSer(null)}/>}>
            <Route path='/' element={<Home/>} />
            <Route path="/login" element={<LogIn onLogIn={setCurrentUSer}/>}/>
              
            <Route path="/product" element={<AddProduct/>}/>
          </Route>
          
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
