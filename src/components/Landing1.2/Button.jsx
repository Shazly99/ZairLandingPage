import React from 'react'

function Button({ bg, color, fontSize, text ,borderColor}) {
    return (
        <>
            <button className={`${bg} ${color} ${fontSize} ${text} ${borderColor}` }>{text}</button>
        </>
    )
}

export default Button
