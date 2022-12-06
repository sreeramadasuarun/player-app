import React from 'react'
import { useNavigate } from 'react-router-dom'
import Usecallback from "../react.memo/parent"
import Setdark from "../usememo/ex1-usememo"
import UseReducer from '../useReducer/ex1-reducer'
import UseReducer2 from '../useReducer/ex2-reducer'
import UseRef from '../useRef/ex2-useref'
import Hide from '../useState/hidee'
import Plus from "../useState/plus"
import Message from "../useState/pr-1"
import Todoo from '../useState/Toodo'
// import KFG from "../assets/KGF.mp4"




const Home = () => {

    const navigate = useNavigate()


    return (
        <div>
            <h1>Home</h1>

            {/* <video width="60%" controls>
                <source src={KFG} type="video/mp4" />
            </video>
             */}
            {/* <img src={tree} /> */}


            <button onClick={() => navigate("./Success")} >submit form</button>


            <div className='homegap' >
                <Plus />
            </div>
            <div className='homegap' >
                <Hide />
            </div>
            <hr />
            <div className='homegap' >
                <Usecallback />
            </div>
            <hr />

            <div className='homegap' >
                <Setdark />
            </div>
            <hr />

            <div className='homegap' >
                <UseReducer />
            </div>
            <hr />

            <div className='homegap' >
                <UseReducer2 />
            </div>
            <hr />

            <div className='homegap' >
                <UseRef />
            </div>
            <hr />

            <div className='homegap' >
                <Message />
            </div>
            <hr />
            <div className='homegap' >
                <Todoo />
            </div>
            <hr />




        </div>
    )
}

export default Home;