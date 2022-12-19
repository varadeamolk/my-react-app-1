function App() {
  let str1 = "Home";
  let str2 = "Explore";
  let str3 = "Notifications";
  let counter = 1;

  let increment = () => {
    counter++;
    console.log(counter);
  };

  return (
    <div>
      <h1>{str1}</h1>
      <h1>{str2}</h1>
      <h1>{str3}</h1>
      <h1>{counter}</h1>
      <input type="button" value="Incrment" onClick={increment} />
    </div>
  );
}

export default App;
