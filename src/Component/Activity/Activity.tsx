import React from 'react'
import biking from './biking.png'
import club from './club.png'
import hiking from './hiking.png'
import golf from './golf.png'
import photo from './photo.png'
import swimming from './swimming.png'
const Activity = () => {
  type Values = {
    id: number;
    title: string;
    image: string;
  };
  const  myList:Array<Values> = [
    {
      id: 1,
      title: 'swimming',
      image: swimming,
    },
    {
      id: 2,
      title: 'hiking',
      image:hiking,
    },
    {
      id: 3,
      title: 'biking',
      image: biking,
    },
    
    {
      id: 4,
      title: 'club',
      image: club,
    },
    
    {
      id: 5,
      title: 'golf',
      image: golf,
    },
    
    {
      id: 6,
      title: 'photo',
      image: photo,
    },
  ]
  const listImage=myList.map((item,i) => {
    return <span key={i}>
        <img  key={item.id}  onClick={() => alert(`${item.title}`)} src={item.image} alt={item.title}   />
    </span>
  })
  return (
    <div className="mx-auto my-5 card  col-sm-8 col-md-8 col-lg-6">
          <div className="card-body">
            <h4 className="card-title">
              Activity
            </h4>
            {listImage}
          </div>
      </div>
  )
}

export default Activity