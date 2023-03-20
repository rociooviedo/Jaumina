import { useNavigate } from "react-router-dom";


const Principal = () => {
    const history = useNavigate();
    const menu = (e) => {
        history('/');
    }

    return (
        <div className="principal">
            <div className="head">
                <h1>Bienvenida/o  a JA'UMINA! <i className="em em-beer" aria-label="BEER"></i> <i className="em em-tropical_drink"></i></h1>
                <p>Por favor, elija una opción:</p>
            </div>
            <div className="flex-container">
                <div className="aa">
                    <h3>Haz click acá para ver las bebidas disponibles </h3>
                    <button style={{ marginLeft: '10px' }} type="button" onClick={menu} color="primary">Elegir una bebida</button>
                </div>
            </div>

        </div>
    )
}
export default Principal;