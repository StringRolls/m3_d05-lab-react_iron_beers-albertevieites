import React from "react";
import { Link } from "react-router-dom";

function BeerCard({ beer }) {
  const { _id, name, tagline, image_url, contributed_by } = beer;

  return (
    (beer && <Link to={`/beers/${_id}`}>
      <div className="cardBeer">
        <img src={image_url} alt="beer pic" />
        <div className="beerText">
          <h1>{name}</h1>
          <p>{tagline}</p>
          <p>Contributed by:{contributed_by}</p>
        </div>
      </div>
    </Link>)
  )
}

export default BeerCard;