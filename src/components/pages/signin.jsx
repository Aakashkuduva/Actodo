import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
function Signup(props)

 {
    const Navigate = useNavigate()
    const user = props.user
    const setuserlist = props.setuserlist

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

    function addelement()
    {
        setuserlist([...user,{username:enuser,password:enpass }])
        Navigate("/")
    }


    return(
        <div>

            <div className="bg-black p-10">
                <div className="bg-white p-10 border rounded-md">

                    <h1 className="text-3xl font-medium">Hey Hi</h1>
                    <p>Sign Up here :)</p>

                    <div className="gap-1 flex flex-col my-2 ">
                        <input value={enuser} onChange={enteruser} className="border-black border rounded-md w-52 p-2 bg-transparent " type="text" placeholder="Username" />
                        <input value={enpass} onChange= {enterpass} className="border-black border rounded-md w-52 p-2  bg-transparent" type="text" placeholder="Password" />
                        <input  className="border-black border rounded-md w-52 p-2  bg-transparent" type="text" placeholder="Confirm Password" />
                    </div>
                    <div>
                        <button onClick={addelement} className="bg-[#CA8201] p-1 border rounded-md w-24">Signup</button>
                        <p>Already have an account? <Link to={"/"}>Login</Link></p>
                    </div>

                </div>
            </div>

        </div>
        )
    
}

export default Signup