import React, { useContext, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext, HeroeContext } from "../Context";
import { heroes } from "../data/heroes";
import { useForm } from "../hooks/useForm";
import { HeroCard } from "../pages/heroes/HeroCard";
import { getHeroesBySuperhero } from "../selectors/getHeroesBySuperhero";
import { types } from "../type/types";

export const Navbar = () => {
 const  history =useHistory();


  //busqueda de heroe por barra de busqueda👇
  const { heroe, setHeroe } = useContext(HeroeContext);
  const initialState = {
    searchText: "",
  };
  const [formValues, handleInputChange] = useForm(initialState);
  const heroedFilter = getHeroesBySuperhero(formValues.searchText);
  //busqueda de heroe por barra de busqueda☝️

  //Autenticacion de usuario 👇
  const { user, dispatch } = useContext(AuthContext); // usuario para mostrar quien se logeo y su dispatch

  const handleLogout = () => {

    dispatch({
      type: types.logout,
    });
     history.replace("/login")
  };

  //Autenticacion de usuario ☝️

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/marvel">
            Heroes
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/marvel"
                >
                  Marvel
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/dc"
                >
                  DC
                </NavLink>
              </li>
            </ul>
            <form class="d-flex" onSubmit={handleSubmit}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchText"
                onChange={(event) => {
                  setHeroe(event.target.value);
                }}
              />
            </form>
            <span className="nav-item nav-link text-input">{user.name}</span>

            <button onClick={handleLogout} className="nav-item nav-link btn">
              logout
            </button>
          </div>
        </div>
      </nav>
      {/*Filtro para buscar el heroe por medio de la barra de busqueda 👇*/}
      <div className="row">
        {heroes
          .filter((val) => {
            if (heroe == "") {
              return null;
            } else if (
              val.superhero
                .toLocaleLowerCase()
                .includes(heroe.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return <HeroCard key={val.id} {...val} />;
          })}
      </div>
      {/*Filtro para buscar el heroe por medio de la barra de busqueda☝️*/}
    </div>
  );
};
