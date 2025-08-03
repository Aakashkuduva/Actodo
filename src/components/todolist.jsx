import Todoitem from "./todoitem"

function Todolist(props) {


    
const activityarr = props.activityarr
const setactivityarr = props.setactivityarr








    return (
        <div className="bg-sky-400 p-3 border rounded-md flex-grow flex-wrap">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityarr.length === 0?<p>You haven't added any activity yet</p>:""}

            {
                activityarr.map(function (item, index) {
                    return <Todoitem id = {item.id} activity={item.activity} index={index} activityarr = {activityarr}  setactivityarr ={setactivityarr}/>
                })
            }

        </div>
    )
}

export default Todolist