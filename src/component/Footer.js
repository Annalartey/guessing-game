import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-black text-white text-center space-y-4 font-semibold">
            <p>Game Links</p>
            <div className="flex space-x-10 mx-14 lg:mx-56 lg:px-80 lg:space-x-20">
                <div>
                    <Link to="/food"> <p className="curser-pointer hover:text-gray-700 ">Food</p> </Link>
                    <Link to="/colour"><p className=" curser-pointer hover:text-gray-700 ">colour</p> </Link>
                </div>
                <div>
                    <Link to="/drink"><p className=" curser-pointer hover:text-gray-700 ">drinks</p> </Link>
                    <Link to="/number"><p className=" curser-pointer hover:text-gray-700 ">Mumber</p> </Link>
                </div>
                <div>
                    <Link to="/letter"><p className=" curser-pointer hover:text-gray-700 ">Letter</p> </Link>
                    <Link to="/animal"><p className=" curser-pointer hover:text-gray-700 ">Animal</p> </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
