import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("primary");

  // Member funcn
  let updateTheme = (p1 = "primary") => {
    theme = p1;
    setTheme(theme);
  };

  // VIEW
  return (
    <div>
      <div className="sticky-top">
        <h1 className={`bg-${theme} text-light p-3`}>
          Bootstrap Styling! {theme}
        </h1>

        <input
          className="btn btn-primary"
          type="button"
          value="Primary"
          // onClick = {updateTheme}
          onClick={() => updateTheme("primary")}
        />
        <input
          className="btn btn-success"
          type="button"
          value="Success"
          // onClick={updateTheme}
          onClick={() => updateTheme("success")}
        />
        <input
          className="btn btn-danger"
          type="button"
          value="Danger"
          // onClick={updateTheme}
          onClick={() => updateTheme("danger")}
        />
      </div>
    </div>
  );
}

export default App;
