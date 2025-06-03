import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-amberPrimary py-4 md:px-10 px-4 flex items-center h-[82px]">
      <div className="text-white text-3xl font-medium md:flex text-center justify-between w-full ">
        <h1
          onClick={() => navigate("/")}
          className="hover:scale-120 underline hover:cursor-pointer"
        >
          Images Galery
        </h1>
        <h1
          className="hover:scale-120 underline hover:cursor-pointer"
          onClick={() => navigate("/favorite")}
        >
          Favorites
        </h1>
      </div>
    </header>
  );
}
export default Header;
