/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { useFavoriteContext } from "../context/FavoriteContext";

function CardDetails(props) {
  const { addToFavorite, removeToFavorite, favoriteList } =
    useFavoriteContext();
  const isFavorite = favoriteList.some((fav) => fav.id === props.id);
  const favoriteT = {
    author: props.author,
    download_url: props.image,
    id: props.id,
  };
  function setPictureFavorite(id) {
    if (!isFavorite) {
      addToFavorite(favoriteT);
    } else {
      removeToFavorite(id);
    }
  }
  return (
    <div className="bg-amberPrimary p-3 my-2 rounded">
      <img src={props.image} alt="" className="rounded mb-2 " />
      <div className="">
        <div className="bg-amber-600 rounded p-2">
          <div className="mb-2">
            <h2 className="text-white text-2xl md:text-5xl">Autor:</h2>
            <p className="text-gray-300 md:text-4xl">{props.author}</p>
          </div>
          <h2 className="text-white md:text-4xl text-2xl">Dimensões:</h2>
          <div className="text-gray-300 md:text-3xl">
            <p>Largura: {props.width}</p>
            <p>Altura: {props.height}</p>
          </div>
          <div className="flex items-center justify-between  text-2xl">
            <div onClick={() => setPictureFavorite(props.id)}>
              {isFavorite ? (
                <IoIosStar className="size-6" />
              ) : (
                <FaRegStar className="size-6" />
              )}
            </div>
            <p className=" text-white text-2xl">#{props.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardDetails;
