import React from 'react'
export default Superhero;

function Superhero(props) {
  return (
    <div className="superhero-card">
        <img src={props.image}></img>
        <div className="superhero-name">{props.name}</div>
        <div className="superhero-text">{props.text}</div>
        <button>Выбрать</button>
        </div>
  )
}
