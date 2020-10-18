import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import './App.scss';

function App() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <Header isRegister={isRegister} setIsRegister={setIsRegister} />
      <Main isRegister={isRegister} />
    </>
  );
}

export default App;
