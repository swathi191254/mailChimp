import React, { useEffect, useState } from "react";
import './nav.css'
import { Pagination } from "@mui/material";
import ResponsiveAppBar from "./Nav";
import { Footer } from "./Footer";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { storeData } from '../redux/storeData/action';
import { teal } from "@mui/material/colors";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  console.log(search)
const [arr,setArr] = useState(null)
const fetchData = async () => {
  return axios({
    url: `https://mailchimpabc.herokuapp.com/data?_page=${page}&_limit=10`,
    method: 'GET',
    params: {},
  })
    .then((response) => {
      // const data =(response.data)

      console.log(response.data)
    dispatch(storeData(response.data));
    })

    .catch((error) => {});
};


useEffect(() => {
  fetchData();
}, [page]);

const getData = () => 
fetch("https://mailchimpabc.herokuapp.com/data")
.then((res)=> res.json())

useEffect(() => {
  getData().then((arr) => setArr(arr))
  console.log(arr)
}, [])



  
  return <div >
    <ResponsiveAppBar />
    <div className="search">
    <h1>Search Mailchimp</h1>
    <input type="text" onChange={(e)=>setSearch(e.target.value)} />
    </div>
    <div className="search-data">
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
          <p className="gap"></p>
        <p className="teal">Number:{i}</p>
         <p>{el.data}</p>
         <p>{el.name}Find all the Mailchimp API documentation and tools developers need to send marketing and transactional emails.</p>
        
         
         </div>
         
       )
     })
   }
   </div>
   <Box py={4} display="flex" justifyContent="center">
        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    
   <Footer/>
  </div>;
};

export default SearchPage;
