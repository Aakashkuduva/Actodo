
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login(props)

{
    const user = props.user
    const Navigate = useNavigate()
    const [ruser,setruser] = useState(true)
    const [enuser,setenuserlist] = useState("")
    const [enpass,setenpasslist] = useState("")
 

    function enteruser(event)
    {
        setenuserlist(event.target.value)
    }

    function enterpass(event)
    {
        setenpasslist(event.target.value)
    }


    function handlechange()

    {
        var userfound = false
        user.forEach(function(item)
    {
        if(item.username === enuser && item.password === enpass)
        {
            console.log("Login Sucessful")
            userfound = true
            Navigate("/landing",{state:{user:enuser}})

        }
      
    })
      if(userfound===false)
        {
            console.log("Login failed")
            setruser (false)
        }
    }

     return(
        <div>

            <div className="bg-black p-10 ">
                <div className="bg-white p-10 border rounded-md">

                    <h1 className="text-3xl font-medium">Hey Hi</h1>

                    {
                        ruser?  <p>I help you manage your activities after your login :)</p> : <p className="text-red-500">Please signin before you login</p>
                    }
                   

                    <div className="gap-2 flex flex-col my-2 ">
                        <input value={enuser}  onChange={enteruser} className="border-black border rounded-md w-52 p-2 bg-transparent " type="text" placeholder="Username" />
                        <input value={enpass} onChange={enterpass} className="border-black border rounded-md w-52 p-2  bg-transparent" type="text" placeholder="Password" />
                        
                    </div>
                    <div className="gap-2">
                        <button onClick={handlechange} className="bg-blue-600 p-1 border rounded-md w-24">Login</button>
                        <p>Don't have an account? <Link className="underline" to={"signup"}>Signup</Link></p>
                    </div>

                </div>
            </div> 

        </div>
        )
    
}

export default Login