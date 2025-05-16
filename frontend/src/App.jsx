// App.jsx
import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar.jsx';
import HomePage from './pages/homePage.jsx';
import CreatePage from './pages/createPage.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#111827' : 'white';
    document.body.style.color = darkMode ? '#f3f4f6' : 'black';
    // document.body.style.margin = '0';
    document.body.style.transition = 'background-color 0.3s ease';
    document.body.style.fontFamily = 'sans-serif';
  }, [darkMode]);

  return (
    <>
      {/* always on display */}
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path='/' element={ <HomePage darkMode={darkMode} /> } />
        <Route path='/createpage' element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;
