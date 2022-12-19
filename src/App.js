function App() {
  // Data Members
  let project = "Counter Application";
  let btnValue = "Click Meeeeeee";

  // Member :: Type is Functions
  let clickMe = () => alert();
  let incrment = () => {};
  let decrement = () => {};

  // JSX
  return (
    <div>
      <h1> {project} </h1>
      <h1> </h1>
      <input type="button" value={btnValue} onClick={clickMe} />

      <input type="button" value="Increment" onClick={incrment} />
    </div>
  );
}

export default App;
