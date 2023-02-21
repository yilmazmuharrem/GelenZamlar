
import Anasayfa from "./pages/Anasayfa.js";
import Hakkimda from "./pages/Hakkimda.js";
import {Routes , Route } from "react-router-dom"

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Anasayfa/>}/>
        <Route path="/hakkımda" element={<Hakkimda/>}/>
      </Routes>
      
    </div>
  );
}

export default App;