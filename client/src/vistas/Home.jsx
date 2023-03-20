import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Jaumina from "../components/Jaumina";
import { getAllBebidas } from '../actions/BebidasAction'
import Loading from "../components/loading";
import Error from "../components/error";
import Filter from "../components/Filtrar";

export default function Home() {
    const dispatch = useDispatch()
    const bebidasState = useSelector((state) => state.getAllBebidasReducer)
    const { bebidas, error, loading } = bebidasState

    useEffect(() => {
        dispatch(getAllBebidas())
    }, [])
    return (
        <div>
            <Filter/>
            <h1>Bebidas!</h1>
            <div className="row justify-content-center">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error='Something went wrong' />
                ) : (
                    bebidas.map((bebida) => {
                        return <div className="col-md-3 m-3" key={bebida._id}>
                            <div>
                                <Jaumina bebida={bebida} />
                            </div>
                        </div>
                    })
                )}
            </div>
        </div>
    )
}