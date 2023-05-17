import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import PageNotFount from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="*" element={<PageNotFount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
