
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login'
import Bloges from './Component/Bloges'
import MyBloges from './Component/MyBloges'
import Signup from './Component/Signup'
import Navbar from './Component/Navbar';
import { ToastContainer } from 'react-toastify';

import {Routes,Route} from 'react-router-dom'
import CreateBloge from './Component/CreateBloge';
import { useSelector } from 'react-redux';

function App() {
  const isAuthanticate=useSelector((state)=>state.isAuthantication)

  return (
    <div className="App">
 
    <Routes>
    
    <Route exact path='/'element={isAuthanticate?<CreateBloge/>:<Home/>}/>
    <Route exact path='/Login'element={<Login/>}/>
    <Route exact path='/Bloge'element={<Bloges/>}/>
    <Route exact path='/Mybloges'element={<MyBloges/>}/>
    <Route exact path='/Register'element={<Signup/>}/>
    <Route exact path='/UHome'element={<CreateBloge/>}/>




    
    
    </Routes>

    <ToastContainer/>
    </div>
  );
}

export default App;
