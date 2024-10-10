import './App.css';
import {useState} from 'react';

// Functional components
// This is specifically an arrow function component

// State - plain js object used by react to represent a piece of info about
// the component's current situation

const App = () => {
  // naming hooks: [name, setting function], useState(initial state)
  const [counter, setCounter] = useState(0); // Calling a function in react that starts with "use" is called a hook


  return (
    <div className="App">
      {/* Adding events to the buttons */}
      {/* <button onClick={() => alert('clicked')}>-</button> */}
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>   
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
    </div>
  );
}

export default App;
