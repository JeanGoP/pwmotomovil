import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { jsontratamientoCapitulo_1 } from '../../constants/constants'
import "./tratamientosDatos.css";
import TratamientoCard from "../../components/tratamientoCard";
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

export function TratamientosDatos() {
    
    const navigate = useNavigate();
    const titulo_1 = "Capítulo I – Aspectos Generales";
    const titulo_2 = "Capítulo II - Disposiciones Especiales";

    const [capituloActivo, setCapituloActivo] = useState(1);
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("inicio");
 
    const data = jsontratamientoCapitulo_1;

    const handleChangeCapitulo = (num) => {
        setCapituloActivo(num);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
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
    
    return (
        <>
            <div style={{ background: "#f9fafb" }}>
                <div className="tratamiento-container">
                    <button className="back-button" onClick={() => navigate("/")}>
                        <FaArrowLeft />
                    </button>

                    <div className="tratamiento-overlay">
                        <p>Política de Tratamiento de Datos Personales</p>
                        <span style={{ fontSize: '22px' }}>MOTOMOVIL DE COLOMBIA SAS</span>
                        {/* <p className='capitulo'>
                            {capituloActivo === 1 ? titulo_1 : titulo_2}
                        </p> */}
                    </div>
                </div>

                <div className="container" style={{ paddingBottom: "80px", paddingTop: "30px" }}>
                    {data.map((item, index) => (
                        <div className='contenido--card--tratamiento' key={index}>
                            <TratamientoCard titulo={item.titulo} bodyHtml={item.descripcion} />
                        </div>
                    ))}

                    {/* <div className="botones-capitulos">
                        <button
                            className={`boton-capitulo ${capituloActivo === 1 ? "activo" : ""}`}
                            onClick={() => handleChangeCapitulo(1)}
                        >
                            1
                        </button>
                        <button
                            className={`boton-capitulo ${capituloActivo === 2 ? "activo" : ""}`}
                            onClick={() => handleChangeCapitulo(2)}
                        >
                            2
                        </button>
                    </div> */}
                </div>
            </div>

            <div>
                <section className="contacto-section">
                    <div className="contacto-card">
                        <h2 className="contacto-titulo">
                            Contacto para Consultas y Reclamos
                        </h2>

                        <div className="contacto-grid">
                           
                            <div className="contacto-item">
                                <div className="contacto-icono">
                                    <User/>
                                </div>
                                <div>
                                    <span className="contacto-label">Responsable</span>
                                    <p className="contacto-nombre">
                                        Jeisson Fabian Nieves Perez
                                    </p>
                                    <p className="contacto-cargo">Gerencia</p>
                                </div>
                            </div>

                          
                            <div className="contacto-item">
                                <div className="contacto-icono">
                                    <Mail/>
                                </div>
                                <div>
                                    <span className="contacto-label">Correo Electrónico</span>
                                    <p className="contacto-email">
                                        gerente@motomovil.co
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div style={{background:'#fff'}}>
                    <div className='text-center mt-4' style={{paddingTop:'30px', paddingBottom:'50px'}}>
                    <button className="btn btn-outline-primary btn__volverInicio" onClick={() => handleNavigation('inicio')}>
                                        <span className='' style={{position:'relative', right:'10px'}}> <ArrowLeft/></span> Volver al inicio
                    </button>
                    </div>
            </div>
        </>
    );
}
