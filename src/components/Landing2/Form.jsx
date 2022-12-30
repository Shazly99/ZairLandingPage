import React from 'react'
import { Form } from 'react-bootstrap';
import Component from '../../constants/Component';
import './Contact.scss'
function FormContact() {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} >
                <Component.InputGroup name='FromName' type='text' labelname='Full Name' placeholder='Full Name'/>
                <Component.InputGroup name='FromName' type='email' labelname='Email' placeholder='Email'/>
                <Component.InputGroup name='FromName' type='number' labelname='Phone Number ' placeholder='Phone Number'/>
                <Component.InputGroup name='FromName' type='text' labelname='Company Name' placeholder='Company Name'/>
                
                <div className="app__Landingpage-FromName">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button   className='app__Landingpage-submit' type='submit'>Send Message</button>
            </form>
        </>
    )
}

export default FormContact