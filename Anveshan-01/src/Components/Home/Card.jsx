import React, {useState} from 'react'


 export default function Card({name, location, date, image, status}) {
    const [claimed, setClaimed] = useState(false)

    function handleClick() {
        if(status === 'Found'){
            setClaimed(true);
        }else{
            alert(`Report submitted for lost item: ${name}`);
        }
    };
    
  return (
    <>
       <div className='bg-white text-gray-600 rounded-lg w-full overflow-hidden shadow-2xl'>
        <img src={image} alt={name} className='w-full h-40 object-cover'/>
        <h3 className=' text-lg text-blue-500 font-semibold m-1' >{name}</h3>
        <p className='m-1'>Location : {location}</p>
        <p className='m-1 text-sm'>Date : {date}</p>
        <p className={ ` m-1  ${status === 'Lost' ? 'text-red-500' : 'text-green-500'}`}> Status : {status}</p> 
        <button onClick={handleClick}  disabled={claimed} className={`mt-3 py-2 px-4 rounded-lg text-center 
         ${status === 'Found'
             ? claimed 
             ? 'bg-gray-500 text-white cursor-not-allowed'
             : 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-red-500 text-white hover:bg-red-600'
         }`}
         >
             {status === 'Found'
            ? claimed
              ? 'Item Claimed'
              : 'Claim Item'
            : 'Report Match'}
        </button>
       </div>
    </>
  )
}

