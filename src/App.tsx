import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
