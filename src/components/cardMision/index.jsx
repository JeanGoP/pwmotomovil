import React from "react";
import './cardMision.css'
import {TrendingUp,Calendar,Building2  } from "lucide-react";
import { Zap } from "lucide-react";
import { Target } from "lucide-react";
import { Flag } from "lucide-react";
import { Eye } from "lucide-react";


const CardMision= ({ icono, titulo, cuerpo, color }) => {
    
    const renderIcon = () => {
        switch (icono) {
            case "CircleDollarSign": return <Calendar size={44} />;
            case "users": return <TrendingUp size={44}/>;
            case "Building2": return <Building2 size={44} style={{color:'#002857'}}/>;
            case "Eye": return <Eye  size={40} style={{color:color}} />;
            case "target": return <Target className="" size={40} style={{color:color}} />;
            default: return null;
        }
    };
 
    return (
        <div className="card-mision"
        style={{ borderLeft: `4px solid ${color}` }}
        >
          {/* <div className="mision-icono"
           style={{ background: `${color}` }}
          >
            {renderIcon()}
          </div> */}
          <h3 className="mision-titulo"><span  style={{ position:'relative', bottom:'3px', paddingRight:'8px' }}> {renderIcon()}</span> {titulo}</h3>
          <p className="mision-texto">
            {cuerpo}
          </p>
        </div>
      );

};

export default CardMision;
