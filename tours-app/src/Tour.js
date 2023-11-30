import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, remove }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="tour">
            <div className="">
                <img src={image} alt="" />
            </div>
            <div className="infoWrapper">
                <div className="title">
                    <h3 className="titleName">{name}</h3>
                    <b className="price">{price}$</b>
                </div>
                <p className="desc">
                    {readMore ? `${info} ` : `${info.substring(0, 250)}... `}
                    <span
                        className="readmorebutton"
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore ? 'Read Less' : 'Read More'}
                    </span>
                </p>
                <button className="notinterestedbutton" onClick={() => remove(id)}>
                    It's not interested.
                </button>
            </div>
        </div>
    );
};

export default Tour;
