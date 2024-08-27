import React from 'react';
import * as Form from '@radix-ui/react-form';
import { Route, Router } from 'react-router-dom';


const App = () => (
  <>
    <Router>
      <Route path='/' element={<Home/>} />
    </Router>
  </>
);

export default App;
