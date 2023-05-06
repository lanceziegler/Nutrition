import { useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState('show');

  return (
    // fetch data from usda
    <>
      <h1>Nutrition</h1>
      <div className='card'>
        {/* comment */}
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <button
          onClick={() => {
            toggle === 'show' ? setToggle('hide') : setToggle('show');
          }}
        >
          {toggle}
        </button>
      </div>
      <div className={`square ${toggle}`}>
        <div className={toggle}></div>
      </div>
    </>
  );
}

export default App;
