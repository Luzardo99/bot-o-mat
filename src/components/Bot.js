import React, { useState, useEffect } from "react";

function Bot(props) {

    return (
        <div>
            <p> {props.id} </p>
            <p> {props.type} </p>
            <p> {props.name} </p>
        </div>
    );
}

export default Bot;