import React from 'react'
// import Card from './Card'
// import marin from './images/8b58ed8d6641bfaf694298b444689b35.jpg'
// import bateau from './images/9769ae7a253dd77c32ae6fed9d4855a4.jpg'
// import sea1 from './images/sea-6747081_960_720.jpg'
import paysage from './images/paysage.jpg'

export default function Header() {
  return (
    // <div className="header" style={{backgroundImage: `url('${paysage}')` }}>

    // </div>

    <div className="header">
      <img className='mer' src={paysage} alt="" />
      <div className='title'>
        Liste de naissance de Tamara
      </div>
    </div>
  )
}
