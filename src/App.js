import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Detail from "./page/Detail";
import Shop from "./component/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/:id" element={<Shop />} />
        </Route>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
