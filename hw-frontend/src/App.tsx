import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import { LogIn, Home, AddProduct, Statisztika } from './Pages';
import { IUser } from './Interfaces';

function App() {
  const [currentUser, setCurrentUSer] = useState<IUser|null>(null);

  return (
    
    <Router>
      
        <Routes>
          <Route element={<NavBar currentUser={currentUser} onLogOut={()=> setCurrentUSer(null)}/>}>
            <Route path='/' element={<Home/>} />
            <Route path="/login" element={<LogIn onLogIn={setCurrentUSer}/>}/>
            <Route path='/stats' element={<Statisztika/>} /> 
            <Route path="/product" element={<AddProduct/>}/>
            <Route path="*" element={<Home/>}/>
          </Route>
          
        </Routes>
     
    </Router>
 
  );
}

export default App;
