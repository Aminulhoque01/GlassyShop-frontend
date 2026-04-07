
const Badge=(props)=>{
    return(
        <div>
            <span className={`inline-block py-1 px-3 text-[12px] rounded-full capitalize 
                ${props.status === "pending" && 'bg-primary text-white'}   
                 ${props.status === "confirm" && 'bg-green-500 text-white'}   
<<<<<<< HEAD
                  ${props.status === "delivered" && 'bg-gray-500 text-white'} 
                  ${props.status === "default" && 'bg-gray-500 text-white'}`}>{props.status}</span>
=======
                  ${props.status === "delivered" && 'bg-gray-500 text-white'}`}>{props.status}</span>
>>>>>>> 21fb225816e84c639cc0e5d3c90cc66a93d900e1
        </div>
    )
};

export default Badge;