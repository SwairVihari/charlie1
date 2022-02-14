import React, {Fragment,useState} from 'react'
import "./Footer.css";
import  Button  from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import  Collapse  from 'react-bootstrap/Collapse'
import Charlie from '../images/upwork_client.PNG'
const Footer = () => {
    const [open, setOpen] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("This is submit Handler")
    }
  return (
    <Fragment>
        <div className='Footer'>
            <h1>🔥 Won't be around much longer! 🔥</h1>
        
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

        <p>
        *Sales figures stated or implied are personal sales figures, or that of our students. Please understand these results are not typical. We are using these as examples of what is possible when you commit and take consistent action. We do not guarantee any earnings because your results will vary and depend on many factors, including but not limited to your background, experience, and work ethic. All business entails financial risk as well as massive and consistent effort and action.
        </p>

        <p>
        NOT GOOGLE: This site is not a part of the Google website or Google Inc. Additionally, This site is NOT endorsed by Google in any way.
        </p>

        <p>
        Copyright © 2022 PublishingLife.com | All Rights Reserved | Terms of Service  |  Privacy Policy 
        </p>
        </div>
    </Fragment>
  )
}

export default Footer