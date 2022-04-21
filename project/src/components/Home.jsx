import React from 'react'
import ResponsiveAppBar from './Nav'
import Body from './body'
import SearchPage from './SearchPage'
import {Footer} from './Footer'
export default function Home() {
  return (
    <div>
      <ResponsiveAppBar  />
      <Body/>
     <Footer/>

    </div>
  )
}
