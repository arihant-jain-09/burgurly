import React from 'react'
import './Button.scss'
const Button = ({children}) => {
    return (
        <div className='button'>
            {children}
        </div>
    )
}

export default Button
