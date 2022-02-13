import React from 'react'
import Trans from '../Trans/Trans'
import Activity from '../Activity/Activity'
import Accomodation from '../Accomodation/Accomodation'
import Care from '../Care/Care'
import { useNavigate,
  Routes,
  Route,
  Link } from 'react-router-dom'
import { useState } from 'react'
const SecondPage = () => {
 const [hex,setHex]=useState('#EEE')
 const getRandom=()=>{
  const randomColor="#"+Math.floor(Math.random()*16777215).toString(16)
  setHex(randomColor)
 }
  const route = useNavigate()
  return (
    <div>
      <h1 onMouseMove={getRandom} style={{color:hex}} className='my-3'> Choose Your Categories</h1>
      <Link className='btn btn-primary' to="Trans">Trans</Link> {"  "}
      <Link className='btn btn-primary' to="Activity">Activity</Link>{"  "}
      <Link className='btn btn-primary' to="Accomodation">Accomodation</Link> {"  "}
      <Link className='btn btn-primary' to="Care">Care</Link> {"  "}
     
      <Routes>
        <Route path="Trans" element={<Trans />} />
        <Route path="Activity" element={<Activity />} />
        <Route path="Accomodation" element={<Accomodation />} />
        <Route path="Care" element={<Care />} />
      </Routes>
        <Trans/>
        <Activity/>
        <Accomodation/>
        <Care/>
        <button onClick={()=>{route('/')}} className='btn-danger fw-bold px-5 mb-4'>Submit</button>
    </div>
  )
}

export default SecondPage