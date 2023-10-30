import React from 'react';
import './App.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInSide from './pages/SignInSide';
import ProtectedRoute from './services/service-component/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: implements ProtectedRoute and Redirect */}
        <Route element = {<ProtectedRoute />}>
          <Route path = '/' element = {<Layout/>}/>
        </Route>
        <Route path='/login' element = {<SignInSide/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
