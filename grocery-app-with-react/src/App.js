import { useEffect, useState } from "react";
import "./App.css";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem())
    }else{
        return []
    }
}

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: "",
        type: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            showAlert(true, "Danger", "Please Enter Value");
        } else if (name && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name };
                    }
                    return item;
                })
            );
            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'Success','Value Changed');
        } else {
            showAlert(true, "Success", "Item added");
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            };
            setList([...list, newItem]);
            setName("");
        }
    };

    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg });
    };

    const clearList = () => {
        showAlert(true, "Danger", "Empty List");
        setList([]);
    };

    const removeItem = (id) => {
        showAlert(true, "Danger", "Item Removed");
        setList(list.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const spesificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(spesificItem.title);
    };
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    return (
        <div className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show && (
                    <Alert {...alert} list={list} removeAlert={showAlert} />
                )}
                <h3>Grocery Bud</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        placeholder="eggs.."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? "edit" : "submit"}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className="grocery-container">
                    <List
                        items={list}
                        removeItem={removeItem}
                        editItem={editItem}
                    />
                    <button className="clear-btn" onClick={() => clearList()}>
                        Clear Items
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
