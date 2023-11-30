import React from "react";

const Categories = ({ filterItems, categories }) => {
    return (
        <div className="btn-wrapper">
            {categories.map((category, index) => {
                return (
                    <button
                        key={index}
                        className="filter-btn"
                        onClick={() => filterItems( category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
