import React from 'react'
import '../style/result.css'

export default function Result({winner , reset}) {
  return (
    <div className='result'>
      {winner === 'CIRCLE' && 'Circle won the game'}
      {winner === 'CROSS' && 'Cross won the game'}
      {winner === 'It is A tie' && 'It is A tie!'}

      <button className='btn' onClick={reset}>Reset</button>
    </div>
  )
}
