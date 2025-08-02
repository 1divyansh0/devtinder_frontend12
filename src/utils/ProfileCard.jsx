import React from 'react'

const card = ({yourfeed}) => {
  console.log(yourfeed)
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={yourfeed?.dp}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">{yourfeed?.firstname+" " +yourfeed?.lastname}</h2>
    <p><span className=' font-semibold'>About: </span> {yourfeed?.About}</p>
    <p><span className=' font-semibold'>Skills: </span>{yourfeed?.skills}</p>
    <p><span className=' font-semibold'>Age: </span>{yourfeed?.age}</p>
    <p><span className=' font-semibold'>Gender: </span>{yourfeed?.gender}</p>
      <div className="card-actions justify-end">
    </div>

  </div>


</div>

    
  )
}

export default card