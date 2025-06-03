/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { useFavoriteContext } from "../context/FavoriteContext";

function CardPicture(props) {
  const [favorite, setFavorite] = useState(true);
  const { addToFavorite, removeToFavorite, favoriteList } =
    useFavoriteContext();
  const favoriteT = {
    author: props.autor,
    download_url: props.image,
    id: props.id,
  };

  const isFavorite = favoriteList.some((fav) => fav.id === props.id);

  function setPictureFavorite(id) {
    if (!isFavorite) {
      addToFavorite(favoriteT);
    } else {
      removeToFavorite(id);
    }
  }
  return (
    <div className="bg-amberPrimary p-3 my-2 rounded hover:scale-105 transition-all duration-300">
      <img src={props.image} alt="" className="rounded" />
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-white text-2xl">{props.autor}</h1>

        <div onClick={() => setPictureFavorite(props.id)}>
          {isFavorite ? (
            <IoIosStar className="size-6" />
          ) : (
            <FaRegStar className="size-6" />
          )}
        </div>
      </div>
    </div>
  );
}
export default CardPicture;
