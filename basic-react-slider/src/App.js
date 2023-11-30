import { useState } from "react";
import "./App.css";
import data from "./data.js";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";

function App() {
    const [index, setIndex] = useState(0);

    const { name, price, image, description, company } = data[index];

    const checkNumber = (index) => {
      if(index > data.length - 1){
        return 0
      }
      if(index < 0){
        return data.length - 1
      }
      return index;
    }

    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      })
    }
    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      })
    }

    const suprise = () => {
      let randomNumber = Math.floor(Math.random() * data.length);
      if(randomNumber === index){
        randomNumber = index + 1;
      }
      setIndex(randomNumber);
    }

    return (
        <div className="container">
            <div className="card">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <h3 className="name">{name}</h3>
                    <span className="company">{company}</span>
                    <p className="desc">{description}</p>
                    <span className="price">{price}</span>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={() => prevPerson()}><IoIosArrowBack /></button>
                    <button className="btn" onClick={() => nextPerson()}><IoIosArrowForward /></button>
                </div>
                <div className="suprise">
                    <button onClick={() => suprise()}>Suprise me!</button>
                </div>
            </div>
        </div>
    );
}

export default App;
