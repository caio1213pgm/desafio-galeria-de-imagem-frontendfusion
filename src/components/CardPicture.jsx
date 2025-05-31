/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
function CardPicture(props) {

  const [favorite, setFavorite] = useState(false);

  function setPictureFavorite() {
    setFavorite(!favorite);
  }
  return (
    <div className="bg-amberPrimary p-3 my-2 rounded hover:scale-105 transition-all duration-300">
      <img src={props.image} alt="" className="rounded" />
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-white text-2xl">{props.autor}</h1>

        <div onClick={setPictureFavorite}>
          {favorite ? (
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
