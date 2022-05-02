import { createContext, useState } from "react";
const ContextStore = createContext();
import "./css/main.css";
function App() {
  const [mainStore, setMainStore] = useState({
    isLogin: false,
    userName: "",
    timeOut: false,
  });
  console.log(mainStore);
  return (
    <ContextStore.Provider value={{ mainStore, setMainStore }}>
      <div className="container">
        
      </div>
    </ContextStore.Provider>
  );
}

export default App;
