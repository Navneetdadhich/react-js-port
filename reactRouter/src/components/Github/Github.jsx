import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
 const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState();
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Nvntdad')
    //   .then(response => response.json() )
    //   .then(data => {
    //     console.log(data);
    //     setData(data);
        
    //   })
    // }, [])
    
  return (
    <div className=' h-70 text-center m-4 p-4 bg-gray-500 text-white text-xl'>Github Name : {data.login}
    <h1>Public repos : {data.public_repos} </h1>
    </div>
  )
}

export default Github

export const GithubInfoLoader = async() => {
 const response = await fetch('https://api.github.com/users/Nvntdad')
 return response.json();
}