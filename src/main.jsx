import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoutes from "./routes/Routes.jsx";
import FavoriteProvider from "./context/FavoriteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoriteProvider>
    <MainRoutes />
  </FavoriteProvider>
);
