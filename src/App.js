import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShopList from "./routes/ShopList";
import Detail from "./routes/Detail";
import Main from "./routes/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:range" element={<ShopList />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
