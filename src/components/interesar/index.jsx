import './ingresar.css'
import {MapPin } from "lucide-react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'; 
import { LuMessageCircle } from "react-icons/lu";
import { useState } from "react";
import { MessageCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
const Interesar = ({opcion}) => {
  const [activeMenu, setActiveMenu] = useState("inicio");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleNavigation = (idOrPath) => {
    setActiveMenu(idOrPath);

    if (idOrPath.startsWith("/")) {
        navigate(idOrPath);
    } else {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: idOrPath } });
        } else {
            scrollToId(idOrPath);
        }
    }
};
  
  if(opcion=='A'){
    return (
      <div className="interesar-card h-100">
        <p className="interesar-title">
        ¿TE INTERESA ESTA MOTOCICLETA?
        </p>
        <p className="interesar-text">
        Obtén la mejor cotización y opciones de financiamiento para tu nueva moto.
        </p>
        <button className="btn interesar-btn"><NavLink to="/cotizacion" style={{textDecoration:'none', color:'#b8003e'}}> Solicitar cotización </NavLink> <ArrowRight style={{position:'relative', left:'10px', bottom:'1px'}}/> </button>
      </div>
    );
  }
  if(opcion=='B'){
    return (
      <div className="interesar-card--B h-100">
      
        <p className="interesar-title">
        VISITA NUESTRAS SEDES
        </p>
        <p className="interesar-text">
        Conoce nuestras instalaciones y recibe asesoría personalizada de nuestros expertos.
        </p>
        <button className="btn interesar-btn-B" onClick={() => handleNavigation('ubicacionInicio')}>   <MapPin style={{position:'relative', right:'20px', bottom:'3px'}}/>Ver ubicaciones</button>
      </div>
    );
  }

  };
  
  export default Interesar;
  