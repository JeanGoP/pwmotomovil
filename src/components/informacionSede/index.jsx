import React from "react";
import "./informacionSede.css"
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
const InformacionSede = ({ Nombre, Direccion, Telefono, departamento = '' }) => {
    return (

        <div className="col-lg-12 col-md-12 col-sm-12 div__informacionSede">
            <div className="row">
                <p className="titulo__informacionSede">{Nombre}</p>
            </div>
            <div className="row">
                <p className="textopuntInformacion"> {departamento}</p>
            </div>
            <div className="row">
                <p className="textopuntInfo">DIRECCIÓN</p>

                <div className="info-linea">
                    <span className="conteiconInfo">
                        <MapPin size={22} style={{ color: "#b8003e" }} />
                    </span>
                    <p className="textopuntInformacion">{Direccion}</p>
                </div>
            </div>

            <div className="row">
                <p className="textopuntInfo">TELÉFONO</p>

                <div className="info-linea">
                    <span className="conteiconInfo">
                        <Phone size={22} style={{ color: "#003e8b" }} />
                    </span>
                    <p className="textopuntInformacion">{Telefono}</p>
                </div>
            </div>

        </div>

    )
}

export default InformacionSede;