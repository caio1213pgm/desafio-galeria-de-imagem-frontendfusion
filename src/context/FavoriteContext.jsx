/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext({
  favoriteList: [],
  addToFavorite: () => {},
  removeToFavorite: () => {},
});

export default function FavoriteProvider(props) {
  const [favoriteList, setFavoriteListe] = useState([]);

  function addToFavorite(favoriteT) {
    const favorite = {
      author: favoriteT.author,
      download_url: favoriteT.download_url,
      id: favoriteT.id,
    };
    console.log(favorite.id);
    console.log(favoriteList);
    setFavoriteListe([...favoriteList, favorite]);
  }

  function removeToFavorite(id) {
    const index = favoriteList.findIndex((fav) => fav.id === id);
    console.log(index)
    const newList = [...favoriteList];
    newList.splice(index, 1);
    setFavoriteListe(newList);
  }

  return (
    <FavoriteContext.Provider value={{ favoriteList, addToFavorite, removeToFavorite }}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  return useContext(FavoriteContext);
}
