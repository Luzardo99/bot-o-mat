import React, { useState, useEffect } from "react";
import '../styles/Bot.css'
import "./Fontawesomeicon.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Bot(props) {

    const {
        id,
        type,
        name
    } = props;

    const [task1, setTask1] = useState("");
    const [task2, setTask2] = useState("");
    const [task3, setTask3] = useState("");
    const [task4, setTask4] = useState("");
    const [task5, setTask5] = useState("");

    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    const [show5, setShow5] = useState(true);

    useEffect(() => {
        if (type === "Unipedal" || type === "Arachnid") {
            setTask1("do the dishes");
            setTask2("sweep the house");
            setTask3("do the laundry");
            setTask4("take out the recycling");
            setTask5("make a sammich");
        } else if (type === "Bipedal" || type === "Radial") {
            setTask1("mow the lawn");
            setTask2("rake the leaves");
            setTask3("give the dog a bath");
            setTask4("bake some cookies");
            setTask5("wash the car");
        } else if (type === "Quadrupedal" || type === "Aeronautical") {
            setTask1("do the dishes");
            setTask2("do the laundry");
            setTask3("make a sammich");
            setTask4("rake the leaves");
            setTask5("bake some cookies");
        }
    }, []);

    // completes the task after a certain time period
    async function doTask (des, num) {    
        if (des === "do the dishes") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("do the dishes");
                    complete(num);
                    resolve();
                }, 1000);
            });
        } else if (des === "sweep the house") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("sweep the house");
                    complete(num);
                    resolve();
                }, 3000);
            });
        } else if (des === "do the laundry") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("do the laundry");
                    complete(num);
                    resolve();
                }, 10000);
            });
        } else if (des === "take out the recycling") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("take out the recycling");
                    complete(num);
                    resolve();
                }, 4000);
            });
        } else if (des === "make a sammich") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("make a sammich");
                    complete(num);
                    resolve();
                }, 7000);
            });
        } else if (des === "mow the lawn") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("mow the lawn");
                    complete(num);
                    resolve();
                }, 20000);
            });
        } else if (des === "rake the leaves") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("rake the leaves");
                    complete(num);
                    resolve();
                }, 18000);
            });
        } else if (des === "give the dog a bath") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("give the dog a bath");
                    complete(num);
                    resolve();
                }, 14500);
            });
        } else if (des === "bake some cookies") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("bake some cookies");
                    complete(num);
                    resolve();
                }, 8000);
            });
        } else if (des === "wash the car") {
            return new Promise(function(resolve) {
                setTimeout(function() {
                    console.log("wash the car");
                    complete(num);
                    resolve();
                }, 20000);
            });
        }
    }

    // performs all the tasks, one after another
    async function all() {
        function taskOne() {
            return doTask(task1, 1);
        }
        function taskTwo() {
            return doTask(task2, 2);
        }
        function taskThree() {
            return doTask(task3, 3);
        }
        function taskFour() {
            return doTask(task4, 4);
        }
        function taskFive() {
            return doTask(task5, 5);
        }

        taskOne().then(taskTwo).then(taskThree).then(taskFour).then(taskFive);
    }

    // this changes the state show to false, which turns the button into a paragraph
    // lets the user know that a task has been completed
    const complete = (num) => {
        if (num === 1) {
            setShow1(false);
        } else if (num === 2) {
            setShow2(false);
        } else if (num === 3) {
            setShow3(false);
        } else if (num === 4) {
            setShow4(false);
        } else if (num === 5) {
            setShow5(false);
        }
    }


    return (
        <div className="bot">
            <h1> {"Bot " + name} </h1>
            <h1> {"Type: " + type} </h1>

            <button class="button is-light" onClick={()=>{all()}}>complete all tasks</button>
            <br></br>

            
            <div>
                <label>{task1}</label>
                {show1
                    ?  <button class="button is-black" onClick={()=>{doTask(task1, 1)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>

            <div>
                <label>{task2}</label>
                {show2
                    ?  <button class="button is-black" onClick={()=>{doTask(task2, 2)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>
            <div>
                <label>{task3}</label>
                {show3
                    ?  <button class="button is-black" onClick={()=>{doTask(task3, 3)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>
            <div>
                <label>{task4}</label>
                {show4
                    ?  <button class="button is-black" onClick={()=>{doTask(task4, 4)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>
            <div>
                <label>{task5}</label>
                {show5
                    ?  <button class="button is-black" onClick={()=>{doTask(task5, 5)}}>do task</button>
                    : <p>complete!</p>
                }
            </div>

            <FontAwesomeIcon icon="robot" size="2x" />
        </div>
    );
}

export default Bot;