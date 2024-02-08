import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Setting from './pages/Setting';
import Draw from './pages/Draw';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Setting />}/>
          <Route path='/draw' element={<Draw />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
