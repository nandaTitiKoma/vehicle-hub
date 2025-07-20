import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { addFavorite, removeFavorite } from "../slices/FavoriteSlice";
import { setSelectedVehicle, clearSelectedVehicle } from "../slices/SelectedVehicle";


export default function ProductCard({ modelId, modelName, makeName, image, color, price }) {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.items);

  const isFavorited = favorites.some((item) => item.Model_ID === modelId);

  const handleClick = () => {
    dispatch(setSelectedVehicle({
    Model_ID: modelId,
    Model_Name: modelName,
    Make_Name : makeName,
    image,
  }));
  }

  const handleToggle = () => {
    if (!user) {
      navigate("/login");
    return;
  }
    if (isFavorited) {
      dispatch(removeFavorite(modelId));
    } else {
      dispatch(
        addFavorite({
          Model_ID: modelId,
          Model_Name: modelName,
          Make_Name: makeName,
          image,
        })
      );
    }
  };

  return (
    <div className="group relative rounded-lg shadow-md p-3 bg-gradient-to-r from-slate-800 via-slate-900 to-gray-800 animate-gradient text-white">
      <div className="relative">
        <Link to={`/detail/${modelId}`} onClick={handleClick}>
          <img
            src={image}
            alt={modelName}
            className="aspect-square w-full rounded-md object-cover transition-transform duration-300 transform hover:rotate-1"
          />
        </Link>
        <button
          onClick={handleToggle}
          className={`absolute top-2 right-2 transition ${
            isFavorited ? "text-red-500" : "text-gray-300 hover:text-red-500"
          }`}
        >
          {isFavorited ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </button>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm text-white font-semibold">{modelName}</h3>
          <p className="mt-1 text-sm text-white">{color}</p>
        </div>
        <p className="text-sm font-medium text-white">{price}</p>
      </div>
    </div>
  );
}
