import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register'; // Import the Register component
import { UserData } from './context/User'; // Import the UserData context
import Loading from './components/Loading'; // Import the Loading component
import Admin from './pages/Admin';


const App = () => {
  const { loading, isAuth } = UserData();
  return (
    <>
   {loading ? ( <Loading/> )  : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Home /> : <Login/>} />
        <Route path="/admin" element={isAuth ? <Admin /> : <Login />} />
        <Route path="/Login" element={isAuth ? <Home /> :<Login />} />
        <Route path="/register" element={ isAuth ? <Home /> : <Register/>} />
      </Routes>
    </BrowserRouter>
   )}
   </>
  );
};

export default App;
