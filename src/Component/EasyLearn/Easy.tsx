import React from 'react';
import { useState } from "react";
import DatePicker from 'sassy-datepicker';
import leisure from './images/1.jpeg'
import study from './images/2.jpeg'
import grieving from './images/3.jpeg'
import roadTrip from './images/4.jpeg'
import trolly from './images/5.jpeg'
import business from './images/6.jpeg'
import suitcase from './images/7.jpeg'
import briefcase from './images/8.jpeg'
import handbage from './images/9.jpeg'
import multy from './images/10.jpeg'
import backpack from './images/11.jpeg'
import family from './images/12.jpg'

import '../../App.css';
import { useNavigate } from 'react-router-dom';

function Easy() {
 
  const [toggle,setToggle] =useState(false);
  const toggleIt =()=>{
    setToggle(!toggle)
  }
  const [input, setInput] = useState("");
  const [howInput, setHow] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");
  const [submittedTimes, setHowTimes] = useState("");
  const route = useNavigate()
  const onChange = (date:any) => {
    console.log(date.toString());
  };
type Values = {
  id: number;
  title: string;
  image: string;
};

  const myList:Array<Values> = [
    {
      id: 1,
      title: 'Leisure',
      image: leisure,
    },
    {
      id: 2,
      title: 'Study',
      image:study,
    },
    {
      id: 3,
      title: 'Grieving',
      image: grieving,
    },
    
    {
      id: 4,
      title: 'RoadTrip',
      image: roadTrip,
    },
    
    {
      id: 5,
      title: 'Trolly',
      image: trolly,
    },
    
    {
      id: 6,
      title: 'Business',
      image: business,
    },
    
    {
      id: 7,
      title: 'Suitcase',
      image: suitcase,
    },
    {
      id: 8,
      title: 'Briefcase',
      image: briefcase,
    },{
      id: 9,
      title: 'Handbage',
      image: handbage,
    },
    {
      id: 10,
      title: 'Multy',
      image: multy,
    },
    {
      id: 11,
      title: 'Backpack',
      image: backpack,
    },
    {
      id: 12,
      title: 'Family',
      image: family,
    },
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img  key={item.id}  onClick={() => alert(`${item.title}`)} src={item.image} alt={item.title}   />
    </span>
  })
  return (
    <div className="App text-center ">
      <p className='mb-2'></p>
     <h1 className={toggle?'head-color':'head-toggle'} onMouseOver={toggleIt}>Fill Travel Info   </h1>
      
    <div className="format d-block mt-5">
    <form onSubmit={(e) => e.preventDefault()}>
          <p className="h5">Where </p>
          <p className='m-5'>
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
           type="text" 
           className="form-control"
            id="exampleFormControlInput1" 
            placeholder="type here"/>
          </p>
          <p className="h5">When </p>
        <DatePicker className='mx-auto my-3' onChange={onChange} />
        <p className="h5">How Many </p>
          <p className='m-5'>
          <input 
          value={howInput}
          onChange={(e) => setHow(e.target.value)}
          type="text" className="form-control" id="exampleFormControlInput1" placeholder="type here"/>
          </p>
          <button className='btn-primary' onClick={()=>setSubmittedInput(input)}>add info</button>
          
          <h2>{submittedInput}</h2>
    </form>
    </div>
        
        
      <main className='d-block mb-5'>
        {listImage }
        <br/>
        <br/>
        <button className="btn px-5 " onClick={()=>setHowTimes(howInput)}>Wallet {submittedTimes}</button>
        <br/>
        <br/>
        <button onClick={()=>{route('/category')}} className="btn btn-danger px-5">Processed</button>
      </main>
    </div>
  );
}

export default Easy;
