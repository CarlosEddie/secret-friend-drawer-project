import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Setting from './pages/Setting';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Setting />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
