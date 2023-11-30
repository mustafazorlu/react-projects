import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, remove }) => {
    return (
        <div className="toursWrapper">
            <h1>Our Tours</h1>
            <div className="line"></div>
            <div className="tours">
                {tours.map((tour) => (
                    <Tour key={tour.id} {...tour} remove={remove}/>
                ))}
            </div>
        </div>
    );
};

export default Tours;
