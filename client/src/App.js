
import { useState } from 'react';
import './App.css';
import Login from './components/account/Login';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Dataprovider from './context/Dataprovider';
import {BrowserRouter, Routes,Route, Navigate, Outlet} from 'react-router-dom';
import Createpost from './components/post/Createpost';
import DetailView from './components/details/DetailView';
import Updatepost from './components/post/Updatepost';

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

        <Route path='/details/:id' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/details/:id' element={<DetailView/>}/>
        </Route>

        <Route path='/update/:id' element={<PrivateRoute isAuth={isAuth}/>}>
          <Route path='/update/:id' element={<Updatepost/>}/>
        </Route>
      </Routes>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
    </BrowserRouter>
  </Dataprovider>
      
    
  );
}

export default App;
