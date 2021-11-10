import React, { useState, useEffect } from "react";
import './App.css';

function App() {

    const [name, setName] = useState("");
    const [type, setType] = useState("");

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
            <button onClick={() => {console.log(type + " " + name)}}>Create Bot</button>
        
        </div>
    );
}

export default App;
