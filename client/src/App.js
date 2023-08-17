
import { useState } from 'react';
import './App.css';
import Login from './components/account/Login';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Dataprovider from './context/Dataprovider';
import {BrowserRouter, Routes,Route, Navigate, Outlet} from 'react-router-dom';
import Createpost from './components/post/Createpost';

const PrivateRoute =({isAuth,...props})=>{

  return isAuth ? 
  <> 
  <Header/>
  <Outlet/>
  </> : 
  <Navigate replace to='/login'/>

}

function App() {

  const[isAuth,isUserAuth]=useState(false);

  return (
    
  <Dataprovider>
    <BrowserRouter>
    
    <div className="App" style={{marginTop:"68px"}}>
      <Routes>
        <Route path='/login' element={<Login isUserAuth={isUserAuth}/>} />
        <Route path='/' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/' element={<Home/>}/>
        </Route>

        <Route path='/create' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/create' element={<Createpost/>}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  </Dataprovider>
      
    
  );
}

export default App;
