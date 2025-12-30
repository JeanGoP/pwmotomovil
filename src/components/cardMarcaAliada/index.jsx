import React from "react";
import './cardMarcaAliada.css'


import { Award } from "lucide-react";
import { Calendar } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Users } from "lucide-react";


const CardMarcaAliada= ({ icono, titulo, cuerpo, colorTemp }) => {
   
    const renderIcon = () => {
        switch (icono) {
            case "Sparkles": return <Sparkles  size={60}/>;
            case "Award": return <Award size={60}/>;
            case "Users": return <Users  size={60}/>;

            default: return null;
        }
    };
 
    return (
        <div className="marc-card h-100">
          <div className="marc-icono" style={{  color:'white' }}>
            {renderIcon()}
          </div>
          <h5 className="marc-titulo" style={{ color: 'white' }}>{titulo}</h5>
          <p className="marc-descripcion"  style={{ color: 'white' }}>{cuerpo}</p>
        </div>
      );

};

export default CardMarcaAliada;
