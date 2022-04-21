import React, { useEffect, useState } from "react";
const SearchPage = () => {
  const [search, setSearch] = useState("");
  console.log(search)
const [arr,setArr] = useState(null)
const getData = () => 
fetch("http://localhost:3000/data")
.then((res)=> res.json())

useEffect(() => {
  getData().then((arr) => setArr(arr))
  console.log(arr)
}, [])
console.log(arr)

  
  return  <div>
    <h1>Seach Page</h1>
    <input type="text" onChange={(e)=>setSearch(e.target.value)} />
   {
     arr.filter((data)=>{
       if(search === ""){
         return data;
       }
       else{
         return data.data.toLowerCase().includes(search.toLowerCase())
       }
     })
     .map((data,i)=>{
       return (
       <div key={i}>
         <p>{data.data}</p>
         <p>{data.name}</p>
         
         <hr/>
         </div>
       )
     })
   }
  </div>;
};

export default SearchPage;
