import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
    return (
        <div className="text-center">
            <h1 className="text-xl font-semibold text-red-700 pb-4">LET'S HAVE A FUN TIME!!</h1>
            <h1 className="text-xl font-semibold">Select from these options.</h1>
           <Link to="/food"> <p className="rounded bg-blue-400 py-2 my-4 curser-pointer mx-4">Food</p> </Link>
            <Link to="/colour"><p className="rounded bg-blue-400 py-2 mb-4 curser-pointer mx-4">colour</p> </Link>
            <Link to="/drink"><p className="rounded bg-blue-400 py-2 mb-4 curser-pointer mx-4">drinks</p> </Link>
            <Link to="/number"><p className="rounded bg-blue-400 py-2 mb-4 curser-pointer mx-4">Mumber</p> </Link>
            <Link to="/letter"><p className="rounded bg-blue-400 py-2 mb-4 curser-pointer mx-4">Letter</p> </Link>
            <Link to="/animal"><p className="rounded bg-blue-400 py-2 mb-4 curser-pointer mx-4">Animal</p> </Link>
        </div>
    )
}

export default Main
