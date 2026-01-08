import React from "react";
import './cardPromo.css'
import { useState } from "react";
import { useEffect } from "react";
import { LuMessageCircle } from "react-icons/lu";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";


const CardPromo = ({ imagen, titulo, cuerpo, categoria='' , precio ='', promocion}) => {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      if (showModal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [showModal]);
    const handleClickWhatsapp = () => {
    
        // const telefono = "57"+whatsapp; 
         const telefono = "5712541543"; 
         const mensaje = "Hola, quiero más información"; 
         const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
     
         window.open(url, "_blank");
       };
       const navigate = useNavigate();
       const handlePromocionDetalle = (data) => {
        navigate("/detallepromocion", {
          state: { promocion: data }
        });
      };
    return (
        <>
  
          <div className="promo-card">
            <div className="promo-card-image" onClick={() => setShowModal(true)}>
              <img src={imagen} alt={promocion.descripcion} />
              <span className="categoriaPromocion" >{categoria}</span>
            </div>
            <div className="promo-card-body">
      
              <span className="promo-card-subtitle">{promocion.descripcion}</span>
              <h3 className="promo-card-title">{promocion.precioAnterior}</h3>
              <span className="promo-card-subtitle22">{precio}</span>
              <span className="promo-fecha"><Calendar size={18} style={{position:'relative', bottom:'2px', right:'5px'}}/>{promocion.fecha}</span>
              <button className="promo-card-button"  onClick={() => handlePromocionDetalle(promocion)}>
             
                <span> Ver Detalles <ArrowRight size={20} style={{position:'relative', left:'10px'}}/></span>
              </button>
            </div>
          </div>
  
  
          {showModal && (
  
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="image-wrapper">
                  <img src={imagen} alt={titulo} />
                  <button className="modal-close" onClick={() => setShowModal(false)}>
                    ✕
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )

};

export default CardPromo;
