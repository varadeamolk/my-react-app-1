function App() {
  let clickMe1 = () => {
    console.log("Hello");
  };

  let clickMe2 = (e) => {
    console.log(e);
  };

  // Custom Parameter :: using arrow funcn
  let clickMe3 = (p1) => {
    console.log(p1);
  };

  let clickMe4 = (e, p1) => {
    console.log(e, p1);
  };

  return (
    <div>
      <h1>Btn Click Demo</h1>

      {/** Default No param */}
      <input type="button" value="Click Me 1" onClick={clickMe1} />

      {/** Default Event Param */}
      <input type="button" value="Click Me 2" onClick={clickMe2} />

      {/** Custom Param */}
      <input
        type="button"
        value="Click Me 3"
        onClick={() => clickMe3("primary")}
      />
      <input
        type="button"
        value="Click Me 3"
        onClick={() => clickMe3("danger")}
      />

      {/** Event + Custom Param */}
      <input
        type="button"
        value="Click Me 4"
        onClick={(e) => clickMe4(e, "adsfaf adsf")}
      />
    </div>
  );
}

export default App;
