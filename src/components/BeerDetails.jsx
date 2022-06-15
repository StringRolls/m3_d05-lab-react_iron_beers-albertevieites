import React from 'react';

function BeerDetails(props) {
  const { beerDetails } = props;

  const creatorNameCleaned = (creator) => {
    const symbol = creator.indexOf('<');
    const cleanedName = creator.slice(0, symbol);
    return cleanedName;
  };

  return (
    <div className="beerDetailsContainer">
      <div>
        <img src={beerDetails.image_url} alt={beerDetails.name} />
      </div>

      <div className="nameBeer">
        <h1>{beerDetails.name}</h1>
        <p className="text-base font-medium text-gray-500">
          {beerDetails.tagline}
        </p>
      </div>

      <div className="firsBrewed">
        <p>{beerDetails.attenuation_level}</p>
        <p>{beerDetails.first_brewed}</p>
      </div>

      <div className="creator">
        <p>{beerDetails.description}</p>
        <p>{creatorNameCleaned(beerDetails.contributed_by)}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
