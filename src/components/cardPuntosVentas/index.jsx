import React from "react";
import "./cardPuntosVentas.css"
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
const CardPuntosVentas = ({Nombre, Direccion, Telefono, RutaGoogleMaps='', departamento=''}) =>{
    const handleComoLlegar = () => {
        if (RutaGoogleMaps) {
            window.open(RutaGoogleMaps, '_blank');
        }
    }
    return(
       
            <div className="col-lg-12 col-md-12 col-sm-12 div__CardPuntosVentas">
                <div className="row">
                    <p className="text-md-start text-center titulo__CardPuntosVentas">{Nombre}</p>
                </div>
                <div className="row">
                    <p className="textopunto"> {departamento}</p>
                </div>
                <div className="row">
                    <p className="textopunto"><MapPin size={20} style={{color:'#b8003e'}}/> {Direccion}</p>
                </div>
                <div className="row">
                <p className="textopunto"> <Phone size={20} style={{color:'#003e8b'}}/>  {Telefono}</p>
                </div>
                {/* <div className="row row__btn__CardPuntosVentas">
                     <button type="button" className="btn btn-primary  btn__CardPuntosVentas"  onClick={handleComoLlegar}>¿Cómo llegar?</button>
                     
                </div> */}
            </div>
       
    )
}

export default CardPuntosVentas;