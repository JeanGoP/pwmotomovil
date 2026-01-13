import React, { useEffect, useState, useContext } from 'react';
import './posventa.css';
import { LanguageContext } from '../../context/context';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CardPosventa from '../../components/cardposventa';
import SectionHeader from '../../components/view/sectionHeader';
import CardProducto from '../../components/cardproducto';
import PosventaSelect from '../../components/posventaSelect';
import { Wrench } from 'lucide-react';
import Cards from '../../components/view/card';
import { Phone } from 'lucide-react';
import { Package } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { Shield } from 'lucide-react';
import useScrollReveal from '../../components/useScrollReveal/useScrollReveal';

export function Posventa() {
  useScrollReveal();
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const location = useLocation();
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;

  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState("TODOS");
  const [activeMenu, setActiveMenu] = useState("/modelos");
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

  const rutaImagenFondo = configuracionData?.rutaPortada
    // window.innerWidth <= 576
    //   ? "/images/posventaFondo.png"
    //   : "/images/posventaFondo.png";

  const jsonPosventa = [
    {
      icono: 'confi',
      titulo: 'MANO DE OBRA CALIFICADA',
      detalle: 'Técnicos certificados con amplia experiencia en motocicletas Suzuki',
      servicio: []
    },

    {
      icono: 'box',
      titulo: 'REVISIONES DE GARANTÍA',
      detalle: 'Mantenimiento oficial que preserva tu garantía de fábrica',
      servicio: []
    },
    {
      icono: 'shield',
      titulo: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO',
      detalle: 'Servicios completos para mantener tu moto en óptimas condiciones',
      servicio: []
    },
    {
      icono: 'confi',
      titulo: 'MECÁNICA EN GENERAL',
      detalle: 'Solución integral para cualquier necesidad técnica',
      servicio: []
    }

  ]
  const jsonPosventaRepuestos = [
    {
      imagen: '/images/llantasposventa.png',
      titulo: 'Llantas'

    },

    {
      imagen: '/images/bateriaposventa.png',
      titulo: 'Baterías'

    },
    {
      imagen: '/images/frenosposventa.png',
      titulo: 'Frenos'
    },
    {
      imagen: '/images/filtrosposventa.png',
      titulo: 'Filtros'
    }

  ]


  return (
    <div style={{ background: "#fff" }}>
      <div className="posventaMoto-container"
        style={{
          //   backgroundImage: `url('${configuracionData?.rutaPortadaCotizador}')`,
          backgroundImage: `url('${rutaImagenFondo}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >

        <button className="back-button" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </button>

      </div>
      <div>
        <div className='container'>
          <div className="contenedor__imagen__conocenos d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.7em', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '10px' }}>
              <Wrench size={60} style={{ color: '#b8003e', position: 'relative', bottom: '8px' }} /> POSVENTA

            </h1>

            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565' }}>Descubre quiénes somos, nuestra historia y lo que nos inspira cada día.</p>

          </div>
        </div>
        <div style={{ borderBottom: '4px solid #b8003e' }}></div>
      </div>
      <div style={{ background: '#f9fafb', paddingTop: '20px' }} >
        <div className="container reveal" id='repuestosPosventa' style={{ paddingTop: '50px' }}>
          <div className=" d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2em,0.5em,3em)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '10px' }}>
              NUESTROS SERVICIOS

            </h1>

            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565' }}>Cuidamos tu inversión con servicios de alta calidad y repuestos originales</p>

          </div>

        </div>
        <div className='container-fluid reveal'>
          <div className='row g-4 align-items-stretch' style={{ paddingTop: '50px', paddingBottom: '80px' }}>
            {jsonPosventa.map((item, index) => (
              <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                <Cards
                  key={index}
                  icono={item.icono}
                  titulo={item.titulo}
                  categoria=""
                  cuerpo={item.detalle}
                  precio=""
                  listaItems={item.servicio}
                  imagen=""
                  opcion='EL'
                  btn=''
                  whatsapp=''
                  colorfondo='#fff'

                />
              </div>
            ))}

          </div>
        </div>
      </div>
      <div style={{ background: '#fff', paddingTop: '70px', paddingBottom: '70px' }} className='reveal'>
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-sm-12 col-md-12 col-lg-6" >
              <div className=" d-flex flex-column ">
                <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5em,2vw,2em)', fontWeight: 'bold', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '10px' }}>
                  <span className='' style={{ paddingLeft: '10px', paddingRight: '10px', position: 'relative', bottom: '5px', color: '#b8003e' }}><Package size={48} /></span>REPUESTOS ORIGINALES

                </h1>

                <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#364153', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                  En MOTOMOVIL contamos con un amplio inventario de repuestos y accesorios originales Suzuki para garantizar el rendimiento óptimo de tu motocicleta.
                </p>
                <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#364153', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                <span className='' style={{ paddingLeft: '10px', paddingRight: '10px', position: 'relative', color: '#b8003e' }}><CircleCheckBig size={23} /></span> 
                Repuestos certificados y garantizados
                </p>
                <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#364153', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                <span className='' style={{ paddingLeft: '10px', paddingRight: '10px', position: 'relative', color: '#b8003e' }}><CircleCheckBig size={23} /></span> 
                Amplio catálogo disponible
                </p>
                <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#364153', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                <span className='' style={{ paddingLeft: '10px', paddingRight: '10px', position: 'relative', color: '#b8003e' }}><CircleCheckBig size={23} /></span> 
                Asesoría técnica especializada
                </p>
                <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#364153', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                <span className='' style={{ paddingLeft: '10px', paddingRight: '10px', position: 'relative', color: '#b8003e' }}><CircleCheckBig size={23} /></span> 
                Precios competitivos
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6" >
              <div style={{borderRadius:'15px', border:'2px solid #d4d4d4', background:'#ecedf3'}}>
              <div className=" d-flex flex-column justify-content-center align-items-center text-center">
              <span className='' style={{ color: '#003e8b', paddingTop:'30px', paddingBottom:'30px' }}><Shield size={120} /></span> 
            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '10px' }}>
            GARANTÍA OFICIAL

            </p>

            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#364153', padding: '20px' }}>
            Todos nuestros servicios y repuestos cuentan con garantía oficial Suzuki
            </p>

          </div>
              </div>
            </div>
          </div> 

        </div>
      </div>
      <div style={{ background: 'linear-gradient(to bottom right,#003e8b,#b8003e)', paddingTop: '40px', paddingBottom: '100px' }}>
        <div className="container reveal" id='repuestosPosventa' style={{ paddingTop: '50px' }}>
          <div className=" d-flex flex-column justify-content-center align-items-center text-center ">
            <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2em,0.5em,3em)', fontWeight: 'bold', letterSpacing: '0.05em', color: '#fff', paddingBottom: '10px' }}>
              ¿NECESITAS SERVICIO TÉCNICO?

            </h1>

            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#fff', paddingBottom: '20px' }}>
              Contáctanos para agendar tu cita de servicio o consultar disponibilidad de repuestos
            </p>

          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary btn__mostrarMasCotizacion">
              <span className='spanicono--mostrar'><Phone /></span> Llamar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
