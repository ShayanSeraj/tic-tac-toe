import React from 'react'
import '../style/square.css'
import Circle from './Circle'
import Cross from './Cross'

export default function Square({ position , value , takeTurn }) {

  const handleClick = ()=>{
    if(value === 'EMPTY'){
      takeTurn(position)
    }
  }

  return (
    <div className='square' onClick={handleClick}>
      {value === 'CIRCLE' && <Circle />}
      {value === 'CROSS' && <Cross />}
    </div>
  )
}
