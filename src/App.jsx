import Screen from "./components/screen.jsx";
import Format from "./components/format.jsx";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(['6', '9', '6', '9', '6', '9'])

  return (
    <div className="" style={{backgroundColor: `#${data.join('')}`}}>
      <div className="w-screen h-screen">
        <div className="flex justify-center">
          <Format></Format>
        </div>
        <div className=" screen h-screen flex items-center justify-center">
          <Screen data={data} setData={setData}></Screen>
        </div>
      </div>
    </div>
  )
}

export default App;
