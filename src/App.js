import React from "react";
import { Routes, Route } from "react-router-dom";
import { First } from "./routes/first/First";
import { Second } from "./routes/second/Second";
import { Third } from "./routes/third/Third";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route index element={<First />} />
      <Route path="models" element={<Second />} />
      <Route path="models\:id" element={<Third />} />
    </Routes>
  );
}

export default App;
