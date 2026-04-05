import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [info, setInfo] = useState<string>('');
  useEffect(() => {
    setInfo('Hello World from useEffect hook.');
  }, []);

  return (
    <>
      <h1>{info}</h1>
    </>
  )
}

export default App
