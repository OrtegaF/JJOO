import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({title, className, routeL}) => {
  return (
    <>
    <button className={className} >
      <Link to={routeL} style={{textDecoration:"none", color:"inherit", fontFamily:"arial"}}>{title}</Link>
    </button>
    </>
  )
}

export default Button