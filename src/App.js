import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import ListBeer from "./views/ListBeer";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/beers" element={<ListBeer/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
