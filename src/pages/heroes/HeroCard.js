import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = (hero) => {
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;



  return (
    <div id="custom-card" className="col-3 ">
      <div className="card">
        <img
          src={`../assets/${id}.jpg`}
          className="card-img-top"
          alt={superhero}
        />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/hero/${id}`} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};
