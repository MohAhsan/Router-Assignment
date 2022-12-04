import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Welcome } from './components/Welcome';
import  Login  from './components/Login';

export var credentials=[];

function App() {

  
  return (
    <>
     
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup  />} />
        <Route exact path='/welcome' element={<Welcome />} />
      </Routes>
    </>

  );
}




export default App;
