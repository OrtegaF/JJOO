import React from 'react'
import Card from './Card'
import Button from './Button'
import card1 from '../assets/img/card1.png'
import card2 from '../assets/img/LA2028.jpg'
import card3 from '../assets/img/france.png'
import card4 from '../assets/img/brismane.png'
import card5 from '../assets/img/utah.png'


const Home = () => {
  return (
    <>
        <div className=''>
            <div className="row">
               <div className='col-6 text-center'>
                    <p className=''>
                        <h1 style={{fontSize:"70px"}}>JUEGOS OLÍMPICOS
                        </h1>
                    </p>
               </div>
                <div className='col-6'>
                <p className=''>
                    <h4>Los Juegos Olímpicos son la única 
                        competición verdaderamente global, 
                        multideportiva y que celebra el 
                        deporte en el mundo. Con más de 
                        200 países que participan en más de 
                        400 eventos entre los Juegos de 
                        Verano y de Invierno, los Juegos 
                        son donde todo el mundo acude a competir
                        , a inspirarse y a estar juntos.
                    </h4>
                </p>
                </div>
            </div>
            <div className='bg-info mb-5' style={{height:"550px",width:"100%", backgroundImage:`url('https://img.olympics.com/images/image/private/t_s_pog_overview_hero_xl/f_auto/primary/mk0vuxgrzgr7e8itpj5i')`}}>
                <div className="row" style={{height:"550px"}}>
                    <div className="col-8 d-flex align-items-center justify-content-center">
                            <p className='m-5' style={{fontSize:"20px", color:"white"}}>6 de febrero - 22 de febrero <br />
                                <p style={{fontSize:"70px", color:"white"}}>MILÁN CORTINA 2026</p>
                            </p>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                            <Card img={card1} ancho={"210px"} aimg={'100px'} npage={<Button title="Explora" className="btn btn-sm btn-light w-100 text-start"/>}/>
                    </div>
                </div>
            </div>
            {/* Div de cards */}
            <div className='mb-5 border-bottom pb-5'>
                <div className="d-flex flex-row justify-content-around ">
                <Card img={card2} aimg={"200px"} himg={"180px"} npage={<Button title="LA 2028" className="btn btn-sm btn-light w-100 text-start"/>}/>
                <Card img={card3} aimg={"200px"} himg={"160px"} npage={<Button title="Alpes franceses 2030" className="btn btn-sm btn-light w-100 text-start"/>}/>
                <Card img={card4} aimg={"200px"} himg={"190px"} npage={<Button title="Brisbane" className="btn btn-sm btn-light w-100 text-start"/>}/>
                <Card img={card5} aimg={"200px"} himg={"190px"} npage={<Button title="Salt Lake City-Utah 2034" className="btn btn-sm btn-light w-100 text-start"/>}/>
                </div>
            </div>
            {/* Div de fotografias */}
            <div>
                <p className='m-5' style={{fontSize:"50px"}}>ENTONRO A <br /> LOS JUEGOS</p>
                <div className="row">
                    <div className='col-8 bg-success m-4 d-flex flex-column' style={{ height:"400px", backgroundImage:`url('https://estaticos-cdn.sport.es/clip/2b9610e4-c3c1-41b8-9a2b-6f961af77611_alta-libre-aspect-ratio_default_0.jpg')`}} >
                       <p style={{color:"white", fontSize:"60px", margin:"20px"}}>Resultados</p>
                       <div className='d-flex justify-content-end mt-auto p-2 bd-highlight'>
                        <Button title="Descubre" className="btn btn-md btn-light m-2 shadow"/>
                       </div>
                    </div>
                    <div className="col-3 bg-primary m-4 d-flex flex-column " style={{ height:"400px", backgroundImage:`url('https://storage.rayados.com/noticias/g/15731_Inauguracion-del-Estadio-BBVA.jpg')`}}>
                        <p style={{color:"white", fontSize:"45px", margin:"20px"}}>Repeticiones</p>
                        <div className='d-flex justify-content-end mt-auto p-2 bd-highlight '>
                            <Button title="Descubre" className="btn btn-md btn-light  shadow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home