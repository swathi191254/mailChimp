import React, { useEffect, useState } from "react";
import './nav.css'
import { Pagination } from "@mui/material";
import ResponsiveAppBar from "./Nav";
import { Footer } from "./Footer";
const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0)
  
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
// const handleClick = (e) ={
//   setPage(e.target.arr)
// }

  
  return <div className="search">
    <ResponsiveAppBar />
    <h1>Search Mailchimp</h1>
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
   {/* <Pagination count={10} onClick={handleClick} /> */}
   <Footer/>
  </div>;
};

export default SearchPage;
