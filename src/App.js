// import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/first" element={<FirstPage />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
