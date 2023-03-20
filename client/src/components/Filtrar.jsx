import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtrarBebidas } from "../actions/BebidasAction";
export default function Filter() {
    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [categoria, setcategory] = useState('gaseosas')
    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">

                <div className="col-md-3 w-100">
                    <input
                        onChange={(e) => { setsearchkey(e.target.value) }}
                        value={searchkey} type="text" className="form-control w-100" placeholder="Buscar bebida por nombre" />
                </div>
                <div className="col-md-3 w-100">
                    <select className="form-control w-100 mt-2" value={categoria} onChange={(e) => setcategory(e.target.value)}>
                        <option value="gaseosas">Gaseosas</option>
                        <option value="energizantes">Energizantes</option>
                        <option value="jugos">Jugos</option>
                        <option value="agua">Agua</option>
                        <option value="cerveza">Cerveza</option>
                    </select>
                </div>
                <div className="col-md-3 w-100">
                    <button className='btn w-100 mt-2' onClick={() => { dispatch(filtrarBebidas(searchkey, categoria)) }}>FILTRAR</button>
                </div>

            </div>
        </div>
    )
}