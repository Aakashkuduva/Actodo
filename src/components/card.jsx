function Card(props)
{
    return(

            <div style={{backgroundColor:props.bgcolor}} className = "border rounded-md text-center flex-grow px-10 py-5">
              <h1 className="text-2xl font-medium">{props.title}</h1>
              <p>{props.subtitle}</p>
            </div>

    )
}

export default Card