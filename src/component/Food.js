import {React, useState} from 'react'
import Footer from './Footer';
import about from '../images/about.jpg'

function Main() {
  const [guesses, setGuesses] = useState(5)
    


    function myFunction() {
        let food = document.getElementById("myInput").value;
        var text;

        //If nothing is put in the answer box
        // If (!food) {
        //     alert ("try guessing a food")
        // };

        // If the food is "rice"
        if (food === "rice") {
            text = "Wow... you just read my mind";
            setTimeout (function() {
                alert ("you won")
                window.location.reload()
            }, 1000);
         }

        // If the letter is "fufu" or "beans"
        else if (food === "fufu" || food === "beans") {
            text = "Close, but this is too difficult to make.";
        } 

        // If the food is anything else
         else {
            text = "Waaay off.. I dont feel like eating this";
        }
        document.getElementById("demo").innerHTML = text;
        setGuesses(guesses - 1)

        //If number of guesses is zero
        if (guesses === 0) {
            alert ('game over. Try again')
            window.location.reload()
        }
    }
    return (
        <div className="text-center">
            <h1 className=" pt-8 px-4 text-center text-red-700 text-4xl font-bold ">FOOD GUESSING GAME</h1>
            <div className="w-full border-b-2 border-black my-4"></div>
            <img className="rounded-full border-2 border-black w-56 h-56 lg:rounded lg:h-96 lg:w-96 mx-auto " src={about} alt="food"></img>
            <h3 className="font-semibold text-lg text-center">I am thinking of a food.</h3>
            <h3 className="font-semibold text-lg text-center">Can you guess which one it is?</h3>
            <input className="border-2 my-2" id="myInput" type="text" placeholder="type your answer"></input>
            <br></br>
            <button className="rounded bg-green-700 px-2 text-white " onClick={myFunction}>It's this food</button>
            <p>No of guesses : {guesses}</p>
            <p className="border-2 mx-4 my-8 py-4 " id="demo"></p> 
            <Footer/>
        </div>
    )
}

export default Main
