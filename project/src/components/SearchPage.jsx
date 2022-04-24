import React, { useEffect, useState } from "react";
import './nav.css'
import { Pagination } from "@mui/material";
import ResponsiveAppBar from "./Nav";
import { Footer } from "./Footer";
const SearchPage = () => {
  const [search, setSearch] = useState("");
  
  console.log(search)
const [arr,setArr] = useState(null)


const getData = () => 
fetch("https://mailchimpabc.herokuapp.com/data")
.then((res)=> res.json())

useEffect(() => {
  getData().then((arr) => setArr(arr))
  console.log(arr)
}, [])



  
  return <div className="search">
    <ResponsiveAppBar />
    <h1>Search Mailchimp</h1>
    <input type="text" onChange={(e)=>setSearch(e.target.value)} />
   { 
     arr && arr.filter((el)=>{
       if(search === ""){
         return el;
       }
       else{
         return el.data.toLowerCase().includes(search.toLowerCase())
       }
     })
     .map((el,i)=>{
       return (
       <div key={i}>
         <p>{el.data}</p>
         <p>{el.name}</p>
         
         <hr/>
         </div>
       )
     })
   }
    
   <Footer/>
  </div>;
};

export default SearchPage;
