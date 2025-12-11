import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState('Guest')
  useEffect(() => {
    if(msg !== 'Guest') {
      console.log(`User changed to ${msg}`);
    }
  }, [msg]);
  return (
    <div>
      <h1 id='msg'>Welcome, {msg}!</h1>
      <button id='msgchange' onClick={() => setMsg("Alice")}>Login as Alice</button>
    </div>
  );
}

export default App;