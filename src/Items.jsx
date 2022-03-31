import React from 'react'

export default function Items(props) {
    return (
        <div>
            <img alt={props.nom} src={props.imgsrc} className="photo" />
            <button name={props.link} className="legend" onClick={props.handleclick}>{props.nom}</button>
        </div>
    )
}
