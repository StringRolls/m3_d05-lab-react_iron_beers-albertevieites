import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SingleBeerDetails from '../components/BeerDetails';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

function SingleBeer() {
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id: beerId } = useParams();

  useEffect(() => {
    const getBeersFromApi = async () => {
      try {
        const beersFromApi = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(beersFromApi.data);
        setIsLoading(false);
      } catch (error) {}
    };
    getBeersFromApi();
  }, [beerId]);

  return (
    <div>
      <Header />
      <div>
        <h1>
          Beer Details
        </h1>
        {isLoading && <Spinner />}
        {!isLoading && <SingleBeerDetails beerDetails={beer} />}
      </div>
    </div>
  );
}

export default SingleBeer;
