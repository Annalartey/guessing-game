import {React, useState} from 'react'
import Main from './Main'

function Home() {
    const [name, setName] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const handleNameInput = (event) => {
        setName(event.target.value)
    }

    function handleLogin(event) {
        event.preventDefault();
        if (name) {
             setLoggedIn(true)
        };
        if(!name){
            alert('Fill the required fields. We would like to know your name.')
        }
    }
    return (
    
        <div className="">

            {
                loggedIn
                ?
                <><h1 className="text-center font-bold text-3xl py-4">Hello {name}</h1>
                    <Main/>     
               
                </>

                :

                <>
                        <div className="main bg-cover w-full h-full py-36 px-8 ">
                            <div className="flex-col bg-white bg-opacity-50 shadow   p-8">
                                <h1 className="text-5xl font-bold">GUESSING GAME</h1>
                                <h3 className="font-semibold text-xl py-4">Can you guess what I am thinking now?</h3>
                                <p>What is your name?</p>
                                <input type="text" name="name" value={name} onChange={handleNameInput} className="border-2 my-2" ></input>
                                <br></br>
                                <button className="rounded bg-green-500 px-4 py-2 mt-4 text-white font-semibold " onClick={handleLogin}>LET'S BEGIN!!</button>
                            </div>
                        </div>
                </>
            }
            
        </div>
    
    )
}

export default Home
