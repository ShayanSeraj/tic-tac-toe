import React from 'react'
import '../style/svg.css'

export default function Circle() {
  return (
    <svg width='100' height='100' viewBox='-50 -50 100 100' className='circle'>
      <circle cx='0' cy='0' r='40' />
    </svg>
  )
}
