import React from 'react'
import "../styles/contact.css"
import pizza from "../asets/makingpizza.jpeg"




function Contact() {

    
    return (

        <div className='contact'>
      
            <div className="us" style={{ backgroundImage: `url(${pizza})` }}>
             


            </div>

            <div className="form">
            <h1>Contact Us</h1>
                <form action="" id='input'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter your name...' id='name'></input>
                    <label htmlFor="email">Email</label>

                    <input type="email" placeholder='Enter your mail id...' id='email'></input>

                    <label htmlFor="phone">Contact No</label>
                    <input type="contact" placeholder='Enter your Contact No...' id='phone'></input>

                    <label htmlFor="comment">Comments</label>
                    <textarea name="" placeholder='Type here....' id="comment" cols="30" rows="5"></textarea>

                    <button  type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact