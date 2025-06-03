import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../home";
import FavoritePage from "../FavoritePage";
export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoritePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
