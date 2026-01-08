import { useState } from "react";
import './promoCarousel.css'
import { ArrowRight } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
const PromoCarousel = ({ promociones = [] }) => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();
  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? promociones.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === promociones.length - 1 ? 0 : prev + 1
    );
  };

  const handlePromocionDetalle = (data) => {
    navigate("/detallepromocion", {
      state: { promocion: data }
    });
  };
  return (
    <div className="promo-carousel">

     
      <button className="promo-arrow left" onClick={prev}><ChevronLeft style={{position:'relative', bottom:'5px', right:'2px'}}/></button>
      <button className="promo-arrow right" onClick={next}><ChevronRight style={{position:'relative', bottom:'5px', left:'2px'}}/></button>

   
      <div className="promo-carousel-viewport">
        <div
          className="promo-carousel-track"
          style={{
            transform: `translateX(-${index * 100}%)`
          }}
        >
          {promociones.map((promo) => (
            <div className="promo-slide" key={promo.id}>
              <div className="promo-card-horizontal">

                <div className="promo-image">
                  <img src={promo.imagen} alt={promo.descripcion} />
                  <span className="promo-badge-top">{promo.categoria}</span>
                </div>

                <div className="promo-info">
                  <span className="promo-tag">{promo.titulo}</span>
                  <h2 className="promo-title">{promo.descripcion}</h2>
                  <span className="promo-old-price">{promo.precioAnterior}</span>
                  <span className="promo-price">{promo.precio}</span>
                  <span className="promo-save">{promo.ahorro}</span>
                  <span className="promo-fecha"><Calendar size={18} style={{position:'relative', bottom:'2px', right:'5px'}}/>{promo.fecha}</span>
                  <button className="promo-button" onClick={() => handlePromocionDetalle(promo)}>
                    Ver Detalles <span><ArrowRight/></span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

   
      <div className="promo-dots">
        {promociones.map((_, i) => (
          <span
            key={i}
            className={`promo-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;
