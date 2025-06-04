import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../home";
import FavoritePage from "../FavoritePage";
import PicturePage from "../pages/PicturePage";
export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoritePage/>}/>
        <Route path="/picture/:id" element={<PicturePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
