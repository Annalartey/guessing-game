import {React, useState} from 'react'
import Footer from './Footer';
import num from '../images/num.jpg'

function Numbers() {
  const [guesses, setGuesses] = useState(10)
  const [randomNumber, setRandomNumber] = useState(5)


  let min = 1;
  let max = 20;
 
  function numGenerate() {

      setRandomNumber (Math.floor (min + (Math.random() * (max-min+1))))
  }
    

  let x = randomNumber - 5
  let y = randomNumber + 5


    function myFunction() {
        let number = document.getElementById("myInput").value;
        var text;

        //If nothing is put in the answer box
        // If (!number) {
        //     alert ("try guessing a number")
        // };

        // If the number is equal to random number
        if (number == randomNumber) {
            text = "Wow... you just read my mind";
            setTimeout (function() {
                alert ("you won")
                setGuesses (10)
                numGenerate()
            }, 1000);
         }

        // If the number is anything else
         else {
            text = "Waaay off.. Its not this number";
        }
        document.getElementById("demo").innerHTML = text;
       setGuesses(guesses - 1)

        //If number of guesses is zero
        if (guesses === 0) {  
            alert ('game over. The number was ' + randomNumber + '. Better guess next time.')
            setGuesses(10)
             numGenerate()
        }
    }
    return (
        <div className="text-center">
            <h1 className=" pt-8 px-4 text-center text-red-700 text-4xl font-bold ">NUMBER GUESSING GAME</h1>
            <div className="w-full border-b-2 border-black my-4"></div>
            <img className="rounded-full border-2 border-black w-56 h-56 lg:rounded lg:h-96 lg:w-96 mx-auto " src={num} alt="number"></img>
            <h3 className="font-semibold text-lg text-center">I am thinking of a number.</h3>
            <h3 className="font-semibold text-lg text-center">Can you guess which one it is?</h3>
            {/* <p>x - 5 = {x}</p> <p>x + 5 = {y}</p> */}
            <input className="border-2 my-2" id="myInput" type="text" placeholder="type your answer"></input>
            <br></br>
            <button className="rounded bg-green-700 px-2 text-white " onClick={myFunction}>GO</button>
            <p>No of guesses : {guesses}</p>
            <p className="border-2 mx-4 my-8 py-4 " id="demo"></p> 
            <Footer/>
        </div>
    )
}


export default Numbers
