import "./App.css";
import { useState } from "react";
import data from "./data.js";
import Categories from "./Categories.js";
import Menu from "./Menu.js";

function App() {
    const [menuItems, setMenuItems] = useState(data);
    const allCategories = ['all', ...new Set(data.map((item) => item.category))]
    const [categories, setCategories] = useState(allCategories);


    console.log(allCategories);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(data);
            return;
        }
        const newItems = data.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    return (
        <main className="menu section container">
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
