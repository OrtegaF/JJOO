import React from 'react'

const Card = ({cont, npage, img, ancho="280px", aimg="150px", himg="170px"}) => {
  return (
    <>
    <div className="card shadow" style={{width:ancho, height:"280px"}}>
        <div className="card-body text-center">
            {cont}
            <img src={img} alt="" style={{width:aimg, height:himg}}/>
        </div>
        <div className="card-footer bg-white ">
            {npage}
        </div>
    </div>
    </>
  )
}

export default Card