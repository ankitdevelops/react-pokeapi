import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
const Card = ({ pokemon, imgUrl, loading, error }) => {
  console.log(error);
  if (loading) {
    return (
      <div className="text-center flex justify-center">
        <BounceLoader size={150} color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto flex justify-center">
      <div className="card w-xl bg-base-100 shadow-xl mt-5">
        <figure className=" p-10 sm:p-20">
          <img src={imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{pokemon?.name}</h2>
          <div className="badge">order: {pokemon?.order}</div>
          <div className="badge badge-primary">
            base_experience: {pokemon?.base_experience}
          </div>
          <div className="badge badge-secondary">weight: {pokemon?.weight}</div>
          <div className="badge badge-accent">height: {pokemon?.height}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
