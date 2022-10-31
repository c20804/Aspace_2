import React from 'react'
import "../styles/card.css"

const CardComponent = (props) => {

  return (
    <div className="col">
      <div className="card h-100">
        <img onClick={() => { props.setClick({ click: true, id: props.properties.id }) }} src={props.properties.img} className="card-img-top" alt="game room"></img>
        <div className="card-body">
          <div className='cardhead'>
            <div className='rating'>
              <img src='./images/Star.png' className='star' />
              <span>{props.properties.score}</span>
            </div>
            <h5 className="card-title"><a className='location' href="#">{props.properties.state}, {props.properties.city}</a></h5>
          </div>
          <p className="card-text">{props.properties.room_type}<br />$<span
            className="price">{props.properties.price}</span> per hour</p>
        </div>
      </div>
    </div>
  )
}

export default CardComponent