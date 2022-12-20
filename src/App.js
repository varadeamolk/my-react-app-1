import { useState } from "react";

function App() {
  let [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
  let [theme, setTheme] = useState("primary");

  // Member funcn
  let makePrimaryTheme = () => {
    theme = "primary";
    setTheme(theme);
  };

  let makeSuccessTheme = () => {
    theme = "success";
    setTheme(theme);
  };

  let makeDangerTheme = () => {
    theme = "danger";
    setTheme(theme);
  };

  return (
    <div>
      <div className="sticky-top">
        <h1 className={`bg-${theme} text-light p-3`}>
          Bootstrap Styling! {theme}
        </h1>

        <input
          className="btn btn-primary"
          type="button"
          value=""
          onClick={makePrimaryTheme}
        />
        <input
          className="btn btn-success"
          type="button"
          value=""
          onClick={makeSuccessTheme}
        />
        <input
          className="btn btn-danger"
          type="button"
          value=""
          onClick={makeDangerTheme}
        />
      </div>

      {list.map((item) => (
        <div className={`alert alert-${theme} my-1`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          natus fugiat incidunt pariatur delectus libero in dicta beatae
          adipisci ipsa eius sint autem totam earum rerum ab consequatur dolor
          omnis.
        </div>
      ))}
    </div>
  );
}

export default App;
