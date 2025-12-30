import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CotizacionCard } from "../../components/view/cotizacionCard";
import SectionHeaderCotizacion from "../../components/view/sectionHeadercotizacion"
import Cards from '../../components/view/card';
import "./cotizacion.css";
import { LanguageContext } from "../../context/context";
import CardCotizacion from "../../components/cardCotizacion";
import { FileText } from "lucide-react";
import useScrollReveal from "../../components/useScrollReveal/useScrollReveal";
const dataCotizacion = [
  {
    icono: "FileText",
    titulo: "COTIZACIÓN GRATUITA",
    cuerpo: "Sin compromiso ni costos ocultos",
    color: '#002857'
  },
  {
    icono: "Send",
    titulo: "RESPUESTA RÁPIDA",
    cuerpo: "Te contactamos en menos de 24 horas",
    color: '#e60000'
  },
  {
    icono: "Send",
    titulo: "ASESORÍA PERSONALIZADA",
    cuerpo: "Expertos en motocicletas Suzuki",
    color: '#002857'
  },
];
export function Cotizacion() {
  useScrollReveal();
  const navigate = useNavigate();
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;

  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);
  let imgTemop = '/images//Fondocotizador.png'
  return (
    <div style={{ background: "#fff" }}>
      <div className="cotizacion-container"
        style={{
          // backgroundImage: `url('${configuracionData?.rutaPortadaCotizador}')`,
          backgroundImage: `url('${imgTemop}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Botón circular */}
        <button className="back-button" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </button>



      </div>
      <div style={{ borderBottom: '4px solid #b8003e' }}>
        <div className='container reveal'>
          <div className="contenedor__imagen__conocenos d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '10px' }}>
              <FileText size={60} style={{ color: '#b8003e', position: 'relative', bottom: '8px' }} /> COTIZACIÓN

            </h1>

            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565' }}>Solicita información sobre tu próxima motocicleta Suzuki</p>

          </div>
        </div>
      </div>
      <div style={{ background: '#f9fafb' }}>
        <div className='container reveal'>
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '10px', paddingTop: '70px' }}>
              SOLICITA TU COTIZACIÓN

            </p>

            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565' }}>Completa el formulario y nuestro equipo se pondrá en contacto contigo con toda la información</p>

          </div>
        </div>
        <div className="container reveal" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
          <CotizacionCard />
        </div>
      </div>
      <div style={{ background: '#ffffff' }}>
        <div className="container reveal" style={{ paddingBottom: "80px", paddingTop: '50px' }}>
          <div className="cotizacion-container-card">

            {dataCotizacion.map((item, index) => (
              <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                <CardCotizacion
                  key={index}
                  icono={item.icono}
                  titulo={item.titulo}
                  cuerpo={item.cuerpo}
                  color={item.color}
                />
              </div>
            ))}


          </div>
        </div>
      </div>

    </div>

  );
}
