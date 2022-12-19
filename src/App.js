function App() {
  let project = "Counter Application";
  let btnValue = "Click Meeeeeee";

  return (
    <div>
      <h1> {project} </h1>
      <input type="button" value={btnValue} />
    </div>
  );
}

export default App;
