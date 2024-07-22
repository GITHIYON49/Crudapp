import React from 'react'

const Button = ({name,className,icons,onClick}) => {
  return <>
  <button className={`${className} py-2 text-lg capitalize font-semibold rounded-lg`} onClick={onClick} >{icons}{name}</button>
  </>
}

export default Button;