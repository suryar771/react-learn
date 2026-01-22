import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'




function GitHub() {
    // const [data,setData] = useState([]);
    // const {username} = useParams();
    const data = useLoaderData();


    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(`render`);
    //         console.log(data);
    //         setData(data);

    //     })
    // },[username])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers:{data?.followers} </div>
  )
}

export default GitHub

export const githubInfoLoader = async()=>{
  const response = await fetch(`https://api.github.com/users/hiteshchoudhary`);
  return response.json();

}