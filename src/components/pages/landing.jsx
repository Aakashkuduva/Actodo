import Card from "../card";
import Header from "../header";
import Todocontainer from "../todocontainer";
 
import { useLocation } from "react-router-dom"


function Landing()


{

    const data = useLocation()
     return (

    <div className="bg-black p-16">

      <div className="bg-white p-10 border rounded-md">
        <div>
          <Header username ={data.state.user}></Header>

          <div className=" flex  my-7 flex-wrap gap-7"> 
            <Card bgcolor ={"#685BAE"} title={"28"} subtitle={"Madurai"}/>
             <Card bgcolor ={"#CA524E"} title={"July"} subtitle={"12:12:14"}/>
              <Card bgcolor ={"#CA8201"} title={"Build Using"} subtitle={"React"}/>
          </div>

          

        </div>

        <div>
          <Todocontainer></Todocontainer>
        
        </div>
      </div>
    </div>
  )
}

export default  Landing