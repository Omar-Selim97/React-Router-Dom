import React from 'react'
import Bus from './Bus.png'
import car from './car.png'
import metro from './metro.png'
import plane from './plane.png'
import ship from './ship.png'
import taxi from './taxi.png'
const Trans = () => {
  type Values = {
    id: number;
    title: string;
    image: string;
  };
  const  myList:Array<Values> = [
    {
      id: 1,
      title: 'Bus',
      image: Bus,
    },
    {
      id: 2,
      title: 'car',
      image:car,
    },
    {
      id: 3,
      title: 'metro',
      image: metro,
    },
    
    {
      id: 4,
      title: 'plane',
      image: plane,
    },
    
    {
      id: 5,
      title: 'taxi',
      image: taxi,
    },
    
    {
      id: 6,
      title: 'ship',
      image: ship,
    },
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img  key={item.id}  onClick={() => alert(`${item.title}`)} src={item.image} alt={item.title}   />
    </span>
  })
  return (
    <div className="mx-auto my-5 card col-xs-8  col-sm-8 col-md-8 col-lg-6">
    <div className="card-body">
      <h4 className="card-title">
        Transport
      </h4>
      {listImage}
    </div>
</div>
  )
}

export default Trans