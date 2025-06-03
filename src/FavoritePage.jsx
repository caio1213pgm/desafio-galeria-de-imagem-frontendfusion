import { useFavoriteContext } from "./context/FavoriteContext";
import Design from "./layout/Design";
import ListPictures from "./components/ListPictures";

function FavoritePage() {
  const { favoriteList } = useFavoriteContext();
  return (
    <Design>
      <div className="min-h-[calc(100vh-82px-82px)] bg-bgGray p-3 ">
        <h1>Favorite Page</h1>
        <ListPictures pictures={favoriteList} />
      </div>
    </Design>
  );
}

export default FavoritePage;
