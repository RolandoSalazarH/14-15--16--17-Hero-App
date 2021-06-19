import React,{useContext} from "react";
import { useParams } from "react-router";
import { HeroeContext } from "../../Context";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroPage = () => {
  
  const {  setHeroe } = useContext(HeroeContext);
    setHeroe("")
  const { heroeId } = useParams();
  const heroe = getHeroesById(heroeId);
  return (
    <div className="row">
      <div className="col-4">
        <h1 className="text-center">{heroe.superhero}</h1>
        <img
          id="img-heroe"
          src={`../assets/${heroe.id}.jpg`}
          className="card-img-top animate__animated animate__fadeInLeft"
          alt={heroe.superhero}
        />
      </div>
      <div className="col-8"></div>

    </div>
  );
};
