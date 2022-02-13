import React from 'react'
import baby from './baby.png'
import medical from './medical.png'
import merchandise from './merchandise.png'
import pets from './pets.png'
import valuables from './valuables.png'
import toddlers from './toddlers.png'
const Care = () => {
  type Values = {
    id: number;
    title: string;
    image: string;
  };
  const  myList:Array<Values> = [
    {
      id: 1,
      title: 'baby',
      image: baby,
    },
    {
      id: 2,
      title: 'medical',
      image:medical,
    },
    {
      id: 3,
      title: 'merchandise',
      image: merchandise,
    },
    
    {
      id: 4,
      title: 'pets',
      image: pets,
    },
    
    {
      id: 5,
      title: 'valuables',
      image: valuables,
    },
    
    {
      id: 6,
      title: 'toddlers',
      image: toddlers,
    },
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img  key={item.id}  onClick={() => alert(`${item.title}`)} src={item.image} alt={item.title}   />
    </span>
  })
  return (
    <div className="mx-auto my-5 card col-xs-12  col-sm-8 col-md-8 col-lg-6">
    <div className="card-body">
      <h4 className="card-title">
        Special Care
      </h4>
      {listImage}
    </div>
</div>
  )
}

export default Care