import React from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route  exact path='/login' element={<Login />} />
     <Route exact path='/signup' element={<Signup />} />
     <Route exact path='/netflix' element={<Netflix />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App