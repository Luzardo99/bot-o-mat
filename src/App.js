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
                <input className="radio" type="radio" value="Unipedal" name="gender"/> Unipedal
                <input className="radio" type="radio" value="Bipedal" name="gender"/> Bipedal
                <input className="radio" type="radio" value="Quadrupedal" name="gender"/> Quadrupedal
                <br></br>
                <input className="radio" type="radio" value="Arachnid" name="gender"/> Arachnid
                <input className="radio" type="radio" value="Radial" name="gender"/> Radial
                <input className="radio" type="radio" value="Aeronautical" name="gender"/> Aeronautical
            </div>

            <input className="input is-primary nameInput" value={name} placeholder="bot name" onChange={(e) => {setName(e.target.value)}}/>
            <br></br>
            <button className="button is-primary" onClick={() => {addBot(); console.log(type + " " + name)}}>Create Bot</button>
            {error && <p>Please select type and name</p>}

            <div className="bots">
                {botList}
            </div>
        </div>
    );
}

export default App;
