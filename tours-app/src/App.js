import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            console.log(tours);
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const remove = (id) => {
        const removedTour = tours.filter((tour) => tour.id !== id);
        setTours(removedTour);
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (loading) {
        return (
            <main style={{ textAlign: "center" }}>
                <Loading />
            </main>
        );
    }
    if (tours.length === 0) {
        return (
            <main className="container">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection:'column'
                    }}
                >
                    <h1 style={{ textAlign: "center" }}>No Tours Left</h1>
                    <button className="refreshbutton" onClick={() => fetchData()}>Refresh</button>
                </div>
            </main>
        );
    }
    return (
        <main className="App">
            <div className="container">
                <Tours tours={tours} remove={remove} />
            </div>
        </main>
    );
}

export default App;
