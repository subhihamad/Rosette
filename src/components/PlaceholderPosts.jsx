import React, { useEffect, useState } from 'react'

const PlaceholderPosts = () => {
    const [postsData,setPostaData]=useState([]);

    useEffect(()=>{
        const getData= async ()=>{
            const fetchData=await fetch("https://jsonplaceholder.typicode.com/posts");
            const data=await fetchData.json();
            setPostaData(data);
        }
        getData();
    },[])

  return (
    <div className='mt-8'>
      {postsData.map(item=>(
        <div key={item.id}  className='mb-3 '>
         &#123; <ul  className='list-none font-primary xl:text-lg text-sm'>
            <li>"userId":{item.userId},</li>
            <li>"id":{item.id},</li>
            <li>"title:"{item.title},</li>
            <li>"body":{item.body}</li>
          </ul> &#125;,
        </div>
      ))}
    </div>
  )
}

export default PlaceholderPosts