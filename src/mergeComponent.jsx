import React from 'react'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import WhereToBuy from './Components/WhereToBuy/WhereToBuy'


const mergeComponent = () => {
    return (
      <div className='overflow-x-hidden'>
        <Hero />
        <Services/>
        <div >
            <WhereToBuy/>
        </div>
      </div>
    )
}

export default mergeComponent
