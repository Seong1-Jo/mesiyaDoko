import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import ShopList from "./routes/ShopList";
import Detail from "./routes/Detail";
import Main from "./routes/Main";
import Random from "./routes/Random";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:range" element={<ShopList />} />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/nav" element={<Random />} />
        {/* <Route path="/paging" element={<Paging />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
