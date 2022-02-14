import React, {Fragment, useState} from 'react'
import "./MiddlePart.css"
import  Collapse  from 'react-bootstrap/Collapse'
import Charlie from '../images/upwork_client.PNG'
import  Button  from 'react-bootstrap/Button'
import two_people from '../images/two_people.jpg'
const MiddlePart = () => {
    const [open, setOpen] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("This is submit Handler")
    }
  return (
    <Fragment>
        <div className='middle_part'>
            <div className='img_container'>
                <img src={two_people} alt=''></img>
            </div>

            <div className='middle_part_Text'>
                 <h1>
                     *In this short training, you will discover...
                 </h1>

                 <p>
                 <i className="fa fa-money"></i> 
                 <p>
                 ​The TRILLION DOLLAR industry behind this new Amazon opportunity (you'll never guess it)
                 </p>
                 </p>

                 <p>
                 <i className="fa fa-list"></i> 
                 <p>
                 The 4-step process anyone can do to generate stress-free income on Amazon
                 </p>
                 </p>

                 <p>
                 <i className="fa fa-dollar"></i> 
                 <p>
                 ​​Get 3 FREE BONUSES when you attend now and stick around
                 </p>
                 </p>

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


            </div>
        </div>
    </Fragment>
  )
}

export default MiddlePart