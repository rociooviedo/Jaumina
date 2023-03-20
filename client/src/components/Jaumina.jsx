import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/CartAction";

export default function Jaumina({ bebida }) {
    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('unidad');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    function addtocart(){
        dispatch(addToCart(bebida, quantity, varient))
    }
    
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded" >
            <div onClick={handleShow}>
                <h1>{bebida.nombre}</h1>
                <img src={bebida.imagen} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Tamaño:</p>
                    <select className="form-control" value={varient} onChange={(e) => { setVarient(e.target.value); }}>
                        {bebida.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>

                </div>
                <div className="w-100 m-1">
                    <p>Cantidad:</p>
                    <select className="form-control" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, y) => {
                            return <option value={y + 1}>{y + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className="mt-1">Precio: {bebida.precios[0][varient] * quantity} Gs/-</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn" onClick={addtocart}>AGREGAR</button>
                </div>
                <div>
            </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{bebida.nombre}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={bebida.imagen} className='img-fluid' style={{height:'400px' }}/>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CERRAR</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}