import { useState } from "react"

function Addtodoform(props) {

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    const [newactivity, setnewactivityarr] = useState("")

    function handlechange(event) {
        setnewactivityarr(event.target.value)
    }
    function addelement() {
        setactivityarr([...activityarr,{ id:activityarr.length+1, activity: newactivity }])
        

}
return (
    <div>
        <h1 className="text-2xl font-medium flex-wrap">Manage Activities</h1>
        <input value={newactivity} onChange={handlechange} className="border border-black p-2 mt-3" type="text" />
        <button onClick={addelement} className="bg-black text-white p-2 border border-black">Add</button>
    </div>
)
}

export default Addtodoform