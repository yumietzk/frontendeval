import { useState } from 'react';
import Board from './Board';

function App() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState([]);

  function handleInput(e) {
    const { value } = e.target;

    if (+value < 1 || +value > 99) {
      alert('Enter the number between 1 and 99!');
      setNum('');
    } else {
      setNum(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = Array.from({ length: num }, (_, i) => i).map(
      (item) => Math.trunc(Math.random() * 6) + 1
    );
    setResult(result);
  }

  return (
    <>
      <h1 className="text-2xl">Number of dice</h1>
      <form className="w-72 flex flex-col gap-4 mb-5" onSubmit={handleSubmit}>
        <input type="text" value={num} onChange={handleInput} />
        <button className="border-2 border-slate-400 rounded bg-slate-400">
          Roll
        </button>
      </form>
      <Board result={result} />
    </>
  );
}

export default App;
