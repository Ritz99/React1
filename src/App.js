import { useState } from 'react';
import './App.css';
import Assignment from './Component/Assignment';

function App() {
  const [Num, setNum] = useState(0);
  return (
    <Assignment />
  );
}

export default App;
