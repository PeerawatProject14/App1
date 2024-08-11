import React from 'react'
import Calender from './class-components'
import { Header,Content,Footer } from './func-component'

export default function App(){
  return(
    <>
      <Header/>
      <p><center><Calender></Calender></center></p>
      <Content/>
      <Footer/>
    </>
  )
}
