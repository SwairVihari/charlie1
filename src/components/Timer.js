import React, {Fragment} from 'react'
import './Timer.css'

const Timer = () => {
  return (
    <Fragment>
        <div className='Timer'>
            <div className='Time-container'>
                <div className='hour'>
                   <h1> 00 </h1>
                </div>
                <p>HOUR</p>
            </div>
            <div className='Time-container'>
            <div className='minute'>
                 <h1>
                    00
                 </h1>
                </div>
                <p>MINUTES</p>
            </div>
            <div className='Time-container'>
            <div className='second'>
                    <h1>
                    00
                    </h1>
                </div>
                <p>SECONDS</p>
            </div>
        </div>
    </Fragment>
  )
}

export default Timer