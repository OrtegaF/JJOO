import React from 'react'

const SearchA = () => {
  return (
    <>
    <div>
        <div className=''>
            <h1 className='m-2 d-flex justify-content-center'>Atletas</h1>
            <div className='d-flex justify-content-center'>
                <div className="input-group m-5">
                    <input type="text" className="form-control" placeholder="Buscar un atleta" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchA