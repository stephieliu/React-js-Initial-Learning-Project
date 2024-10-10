import './App.css';

// Functional components
// This is specifically an arrow function component
const Person = (props) => {
  return(
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

// Props - allow passing dynamic data through react components
// passed via attributes (basically properties)
const App = () => {
  return (
    <div className="App">
      {/* All the code from Person just got imported straight into App! */}
      <Person
        name={'John'}
        lastName={'Doe'}
        age={25}
      />
      <Person
        name='Jane'
        lastName='Lin'
        age={2+2}
      />

      <h1>Hello!</h1>
    </div>
  );
}

export default App;
