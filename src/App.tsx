import React from 'react';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInSide from './pages/SignInSide';
import ProtectedRoute from './services/service-component/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Database from './pages/Database';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: implements ProtectedRoute and Redirect */}
        <Route element = {<ProtectedRoute />}>
          <Route path = '/' element = {<Layout/>}>
            <Route index element = {<Dashboard/>}/>
            <Route path = '/database' element = {<Database/>}/>
            <Route path = '/calendar' element = {<Calendar/>}/>
          </Route>
        </Route>
        <Route path='/login' element = {<SignInSide/>} />
        <Route path = 'signup' element = {<SignUp/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
