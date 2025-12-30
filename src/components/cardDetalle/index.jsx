import React, { useState } from "react";
import "./carDetalle.css";
import { FaBolt } from "react-icons/fa";
import { Zap,Activity,Wrench,Scale,ChevronDown,ChevronUp } from "lucide-react";
import { Gauge } from "lucide-react";
import { Weight } from "lucide-react";
import { Cog } from "lucide-react";


const CardDetalle = ({ titulo='', contenido='', icono='' , descripcion=''}) => {
  const [abierto, setAbierto] = useState(false);

  const renderIcon = () => {
    switch (icono) {
      case "Zap": return   <Zap   size={32} />;
      case "Activity": return   <Cog   size={32} />;
      case "Gauge": return   <Gauge size={32} />;
      case "Weight": return   <Weight  size={32} />;
      default: return null;
    }
  };

  return (
    <div>
    <div
      className={`detalle-card h-100`}
     
    >
          <div className="detalle-icono" >
            {renderIcon()}
          </div>
          <h5 className="detalle-titulo">{titulo}</h5>
          <p className="detalle-descripcion">{descripcion}</p>
    </div>

    </div>
  );
};

export default CardDetalle;
