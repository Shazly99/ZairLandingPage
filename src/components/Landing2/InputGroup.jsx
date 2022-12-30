import React from 'react'
import './Contact.scss'

function InputGroup({ name, type, labelname, placeholder }) {
    return (
        <>
            <div className={`app__Landingpage-${name}`}>
                <label htmlFor="">{labelname}</label>
                <input type={type} placeholder={placeholder} />
            </div>
        </>
    )
}

export default InputGroup
