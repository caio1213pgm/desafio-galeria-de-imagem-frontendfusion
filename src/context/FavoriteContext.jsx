/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext({
  favoriteList: [],
  addToFavorite: () => {},
  removeToFavorite: () => {},
});

export default function FavoriteProvider(props) {
  const [favoriteList, setFavoriteListe] = useState([]);

  useEffect(() => {
    try {
      const listStorage = localStorage.getItem("favorites");
      if (listStorage) {
        const listParsed = JSON.parse(listStorage);
        setFavoriteListe(listParsed);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  function addToFavorite(favoriteT) {
    const favorite = {
      author: favoriteT.author,
      download_url: favoriteT.download_url,
      id: favoriteT.id,
    };
    setFavoriteListe([...favoriteList, favorite]);
    localStorage.setItem("favorites", JSON.stringify([...favoriteList, favorite]));
  }

  function removeToFavorite(id) {
    const index = favoriteList.findIndex((fav) => fav.id === id);
    const newList = [...favoriteList];
    newList.splice(index, 1);
    setFavoriteListe(newList);
    localStorage.setItem("favorites", JSON.stringify(newList));
  }

  return (
    <FavoriteContext.Provider
      value={{ favoriteList, addToFavorite, removeToFavorite }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  return useContext(FavoriteContext);
}
