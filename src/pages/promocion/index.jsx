import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import SectionHeader from '../../components/view/sectionHeader';
import CardSkeletonPromocion from "../../components/cardSkeletonPromocion";
import "./promocion.css";
import BotonFiltroPromocion from "../../components/view/botonFiltroPromocion";
import { LanguageContext } from "../../context/context";
import CardPromo from '../../components/cardPromo';
import CustomSelect from '../../components/customSelect';
import { Funnel } from 'lucide-react';
import useScrollReveal from "../../components/useScrollReveal/useScrollReveal";
import { Gift } from 'lucide-react';
import PromoCarousel from '../../components/promoCarousel';
export function Promocion() {
    useScrollReveal();
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    const [activeBtn, setActiveBtn] = useState("TODOS");

    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    let ImgPromociones = []
    useEffect(() => {
        if (configuracionData) {
            getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
        }
    }, []);

    try {
        if (configuracionData?.promocionesImagen) {
            ImgPromociones = JSON.parse(configuracionData.promocionesImagen);

        }
    } catch (error) {
        console.error('Error al parsear promocionesImagen:', error);
        ImgPromociones = [];
    }

    const navigate = useNavigate();
    const categoriasPromocion = [
        "TODOS",
        ...new Set(
            ImgPromociones
                .map(seg => seg.categoria)
                .filter(Boolean)
        )
    ];
    const promocionesFiltradas =
        activeBtn === "TODOS"
            ? ImgPromociones
            : ImgPromociones.filter(
                promo =>
                    promo.categoria?.trim().toLowerCase() ===
                    activeBtn.trim().toLowerCase()
            );
    const countPromocion = promocionesFiltradas.length;
    const rutaImagenFondo =
        window.innerWidth <= 576
            ? "/images/fondoPromocion.png"
            : "/images/fondoPromocion.png"
    // configuracionData?.rutapromocionesportada;

    // const promocionesJson = [
    //     {
    //       id: 1,
    //       titulo: "DR 150 FI ABS",
    //       precio: "$11.999.000",
    //       precioAnterior: "$12.999.000",
    //       ahorro: "Ahorra $1.000.000",
    //       imagen: "/images/Promocion_1.png",
    //       bono: "BONO $1M + SOAT GRATIS",
    //       etiqueta: "% OFERTA ESPECIAL",
    //       fecha:'Válido del 1 al 30 de noviembre de 2025'
    //     },
    //     {
    //       id: 2,
    //       titulo: "GN 125",
    //       precio: "$7.999.000",
    //       precioAnterior: "$8.499.000",
    //       ahorro: "Ahorra $500.000",
    //       imagen: "/images/Promocion_1.png",
    //       bono: "BONO ESPECIAL",
    //       etiqueta: "% OFERTA",
    //       fecha:'Válido del 1 al 30 de noviembre de 2025'
    //     }
    //   ];
      
    return (
        <div style={{ background: "#ffffff" }}>
            <div className="promocion-container"
                style={{
                    // backgroundImage: `url('${configuracionData?.rutapromocionesportada}')`,
                    backgroundImage: `url('${rutaImagenFondo}')`,
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

            <div>
                <div className='container reveal'>
                    <div className="contenedor__imagen__conocenos d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '10px' }}>
                            <Gift size={60} style={{ color: '#b8003e', position: 'relative', bottom: '8px' }} /> PROMOCIONES

                        </h1>
                    </div>
                </div>
            </div>
            <div style={{ borderBottom: '4px solid #b8003e' }}></div>
            <div >
                <div className='container reveal'>
                    <div className="contenedor__imagen__conocenos d-flex flex-column justify-content-center align-items-center text-center">
                    <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingTop:'10px' }}>
                    OFERTAS ESPECIALES

                </h1>

            
                    </div>
                    <div>
                    <PromoCarousel promociones={ImgPromociones} />
                    </div>
                </div>
            </div>
            <div className=" justify-content-center align-items-center text-center" style={{background:'#f9fafb'}}>
                <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingTop:'70px' }}>
                    TODAS LAS PROMOCIONES

                </h1>
                <div className="container" style={{ paddingBottom: "60px", paddingTop: "50px" }}>
                <div className="row">
                    {promocionesFiltradas.length === 0 ? (
                        Array(4).fill(0).map((_, index) =>
                            <div
                                key={index}
                                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex"
                                style={{ marginBottom: "34px" }}
                            >
                                <CardSkeletonPromocion key={index} /> </div>)
                    ) : (
                        promocionesFiltradas.map((item, index) => (
                            <div
                                key={index}
                                className="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex"
                                style={{ marginBottom: "34px" }}
                            >
                                <CardPromo

                                    titulo={item.titulo}
                                    categoria={item.categoria}
                                    cuerpo={item.descripcion}
                                   // imagen={item.imagen}
                                   imagen='/images/Promocion_1.png'
                                    precio ={item.precio}
                                    whatsapp={configuracionData?.whatsapp || ''}
                                    promocion={item}
                                />

                            </div>
                        ))
                    )}

                </div>
            </div>

            </div>


            {/* <div style={{ background: '#002857', paddingBottom: '40px' }}>
                <div className="terminos-wrapper">
                    <p className="terminos-title">Términos y condiciones</p>

                    <ul className="terminos-list">
                        <li>Las promociones están sujetas a disponibilidad de inventario.</li>
                        <li>Los descuentos no son acumulables con otras promociones.</li>
                        <li>La financiación está sujeta a aprobación de la entidad financiera.</li>
                        <li>Las promociones pueden variar según la ciudad y sede.</li>
                        <li>
                            Consulta con nuestros asesores para más detalles sobre cada promoción.
                        </li>
                        <li>
                            Válido solo en sedes participantes de Motos de la Capital.
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* <div style={{ background: '#002857', paddingBottom: '40px' }}>
                <div className="container contenido-promocion-2" >
                    <div className='row g-4' style={{ paddingTop: '60px' }}>
                        <SectionHeader
                            titulo={configuracionData?.tituloCardPromocion}
                            cuerpo={configuracionData?.descricardPromocion}
                            titleSize="clamp(1.5rem, 2.5vw, 1.5rem)"
                            subtitleSize="clamp(1.1rem, 2vw, 1.3rem)"
                            opcion='B'
                            whatsapp={configuracionData?.whatsapp || ''}
                        />
                    </div>
                </div>
            </div> */}


            <div className="container">
                {/* <div className='row g-4'>
                    <SectionHeader
                        titulo=''
                        cuerpo={configuracionData?.disponiblePromocion}
                        titleSize="clamp(1.5rem, 2.5vw, 1.8rem)"
                        subtitleSize="clamp(1rem, 1vw, 1rem)"
                        opcion='A'
                    />
                </div> */}
            </div>
        </div>

    );
}
