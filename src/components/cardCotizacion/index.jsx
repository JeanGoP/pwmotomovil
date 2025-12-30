import React from "react";
import './cardCotizacion.css'
import {Users,CircleDollarSign,CircleCheck  } from "lucide-react";
import { Send } from "lucide-react";
import { FileText } from "lucide-react";


const CardCotizacion = ({ icono, titulo, cuerpo,color }) => {
    const renderIcon = () => {
        switch (icono) {
            case "Send": return <Send size={35} />;
            case "users": return <Users size={35}/>;
            case "FileText": return <FileText size={35}/>;
            default: return null;
        }
    };
    return (
        <div className="card-cotizacion--new">
        <div className="icon-wrapper--new" style={{background:'#f4ebee'}}>
          {renderIcon()}
        </div>
        <p className="titulo--cotizac">{titulo}</p>
        <p className="cuerpo--cotizac">{cuerpo}</p>
      </div>

    )

};

export default CardCotizacion;
