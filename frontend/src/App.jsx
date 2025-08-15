import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './autentication/Login';

import MainComp from './components/MainComp';
import PrivateRoute from './autentication/privateRoute';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/mainComp"
          element={
            <PrivateRoute>
              <MainComp />
            </PrivateRoute>
          }
        />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
