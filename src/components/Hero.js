import React, {Fragment, useState} from 'react'
import  Button  from 'react-bootstrap/Button'
import  Collapse  from 'react-bootstrap/Collapse'
import Charlie from '../images/upwork_client.PNG'
import "./Hero.css"

import Timer from './Timer'
const Hero = () => {
    const [open, setOpen] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("This is submit Handler")
    }
  return (
    <Fragment>
        <div className='Hero'>
            <h1 className='Hero_text'>The <span>New Way To Make Passive 💰</span>
            On Amazon, Without Selling Physical Products! </h1>

            <h1 className='Hero_red Hero_subtext'><span>The best part?</span>
            You don’t need to buy any inventory, ship out products, or even sell on Amazon to profit!</h1>

            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
              variant="primary">👉 Access FREE TRAINING Now!</Button>
            
            <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
              <div className='example-collapse-text-upper'>
                    <i onClick={()=> {setOpen(false)}} className="fa fa-close"/>
                    <div className='form-img-container'>
                        <img src={Charlie}/>
                    </div>
              </div>
            <form onSubmit={submitHandler}>
                <input type='text' placeholder='Name' name='name'/> <br/>
                <input type='email' placeholder='Email' name='Email'/> <br/>
                <input type='phone' placeholder='Phonno' name='Phone'/> <br/>
                
                <input type='submit' value='Register'/>
               
            </form>
          </div>
        </Collapse>

            <Timer/>

            <p className='Hero__p'>
            Sales figures stated or implied are personal sales figures, or that of our students. Please understand these results are not typical. We are using these as examples of what is possible when you commit and take consistent action. We do not guarantee any earnings because your results will vary and depend on many factors, including but not limited to your background, experience, and work ethic. All business entails financial risk as well as massive and consistent effort and action.
            </p>
        </div>

        

    </Fragment>
  )
}

export default Hero