import React, { useState, useEffect } from "react";
import './App.css';
import Bot from './components/Bot';

function App() {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [id, setId] = useState(1);
    const [botList, setBotList] = useState([]);
    const [error, setError] = useState(false);

    // This functions adds a bot with the specified name and type
    const addBot = () => {
        // bot must have name and type
        // if not then an error message will pop up
        if (name === "" || type === "") {
            setError(true);
            return;
        }

        // the bot component is added onto an array of bots
        setBotList(
            botList.concat(  
                <Bot name={name} type={type} id={id} key = {id} />
            )
        );
        setId(id+1);
        setName("");
        setError(false);
    }

    return (
        <div className="App">
            <div onChange={(e) => {setType(e.target.value); console.log(e.target.value);}}>
                <input type="radio" value="UNIPEDAL" name="gender"/> Unipedal
                <input type="radio" value="BIPEDAL" name="gender"/> Bipedal
                <input type="radio" value="QUADRUPEDAL" name="gender"/> Quadrupedal
                <br></br>
                <input type="radio" value="ARACHNID" name="gender"/> Arachnid
                <input type="radio" value="RADIAL" name="gender"/> Radial
                <input type="radio" value="AERONAUTICAL" name="gender"/> Aeronautical
            </div>

            <input value={name} onChange={(e) => {setName(e.target.value)}}/>
            <button onClick={() => {addBot(); console.log(type + " " + name)}}>Create Bot</button>
            {error && <p>must have type and name</p>}

            {botList}
        </div>
    );
}

export default App;
