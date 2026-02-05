import { div } from 'motion/react-client'
import React from 'react'

export default function ServiceCard({Servicecard}) {
    console.log(Servicecard)
  return (
    <div>
      {Servicecard.map((card)=>(
        <div>
            <img src={card.img} alt="" />
            <h1>{card.title}</h1>
            <p>{card.sub}</p>
        </div>
      ))}
    </div>
  )
}
