
import { useState } from "react"
import Addtodoform from "./addtodoform"
import Todolist from "./todolist"

function Todocontainer()

{

    const [activityarr, setactivityarr] = useState([{
        id: 1,
        activity: "Go to breakfast"

    },


    {
        id: 2,
        activity: "Walking time"
    },
    {
        id: 3,
        activity: "Go to office"
    }])
    return(

        <div className="flex gap-5">
           <Addtodoform activityarr= {activityarr} setactivityarr ={setactivityarr} />

            <Todolist activityarr= {activityarr} setactivityarr ={setactivityarr} />

        </div>
    )
}


export default Todocontainer