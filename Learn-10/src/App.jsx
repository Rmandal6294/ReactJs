import { useState } from "react";
import Header from "./Components/Header";
import Headers from "./ContextAPIHook/Headers";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <div>
        {/* Data passed through children props and get data from children go -- app->header->selectTheme come --- selectTheme -->header-->app*/}
        <Header theme={theme} setTheme={setTheme} />
      </div>

      <div className="mt-30">
        {/* using context API */}
        <Headers />
      </div>
    </>
  );
};

export default App;
