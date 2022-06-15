import axios from "axios";
import React, {useState, useEffect} from "react";
import BeerCard from "../components/BeerCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";

const ListBeer = () => {
    const [beers, setBeers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const getBeersFromAPI = async () => {
            try {
                const beersAPI = await axios.get(
                    `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
                );
                setBeers(beersAPI.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getBeersFromAPI();
    }, [query]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="listBeerContainer">
            <Header/>
            <SearchBar query={query} filterByQuery={handleChange}/>
            {isLoading && <Spinner/>}
            {beers.map((beer) => {
                return <BeerCard beerDetails={beer} key={beer._id}/>;
            })}
            {beers.length === 0 && !isLoading && (
                <p className="no-results">Oups we run out this one! Don't worry be hoppy, there are plenty more <span>🍻</span>
                </p>
            )}
        </div>
    );
}

export default ListBeer;
