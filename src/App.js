import './App.css';

// Functional component
// This is specifically an arrow function component
const App = () => {
  const name = 'John';
  
  return (
    <div className="App">
      <h1>Hello!</h1>
      {name?(
        <>
          <h1>{name}</h1>
        </>
      ): (
        <>
          <h1>test</h1>
          <h2>There is no name</h2>
        </>
      )
      }
    </div>
  );
}

export default App;
