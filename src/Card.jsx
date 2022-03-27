import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <img className={props.nom} src={props.url}/>
    </div>
  )
}
