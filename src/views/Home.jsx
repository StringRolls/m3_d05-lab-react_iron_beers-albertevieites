import React from "react";
import {Link} from "react-router-dom";

import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
    return (
        <div className="home-page">
            <div className="beersCard">
                <Link style={{textDecoration: 'none'}} to="/beers">
                    <img src={beers} alt="drinks"/>
                    <h1>All Beers</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        necessitatibus suscipit facilis dolorum ipsum, exercitationem, omnis
                        esse facere maxime labore ab nisi quis velit assumenda eos itaque,
                        aperiam perspiciatis dicta?
                    </p>
                </Link>
            </div>

            <div className="randomCard">
                <Link style={{textDecoration: 'none'}} to="/random-beer">
                    <img src={randomBeer} alt="random drink"/>
                    <h1>Random Beer</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
                        at excepturi tempora necessitatibus dolor qui, ex sapiente animi
                        totam asperiores ut explicabo debitis, suscipit dolore, quisquam hic
                        voluptatibus sequi nostrum?
                    </p>
                </Link>
            </div>

            <div className="newBeerCard">
                <Link style={{textDecoration: 'none'}} to="/new-beer">
                    <img src={newBeer} alt="new drink"/>
                    <h1>New Beer</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                        nesciunt ipsum, sed mollitia nisi facere quo, qui eligendi atque
                        nobis ut magnam ab libero vel inventore laudantium minima ex ad.
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
