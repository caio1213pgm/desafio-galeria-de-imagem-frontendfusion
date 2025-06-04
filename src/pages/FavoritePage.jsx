import { useFavoriteContext } from "../context/FavoriteContext";
import Design from "../layout/Design";
import ListPictures from "../components/ListPictures";
import BodyPages from "../components/BodyPages";

function FavoritePage() {
  const { favoriteList } = useFavoriteContext();
  return (
    <Design>
      <BodyPages>
        <h1 className="text-center text-4xl md:text-5xl text-white mb-3">
          Página de Favoritos
        </h1>
        <ListPictures pictures={favoriteList} />
      </BodyPages>
    </Design>
  );
}

export default FavoritePage;
