function Todoitem(props) {

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr    
    function handledelete(deleteid)
     {
        var temparr = activityarr.filter(function(data)
      {
            if(data.id === deleteid)

                {
                    return false
                }

                else{
                    return true
                }
        })

      setactivityarr(temparr)

    }


    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button onClick={()=>{handledelete(props.id)}} className="text-red-600">Delete</button>

        </div>
    )
}


export default Todoitem