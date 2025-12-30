import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import SectionHeader from '../../components/view/sectionHeader';
import { useState } from "react";
import Cards from '../../components/view/card';
import "./conocenos.css";
import { LanguageContext } from "../../context/context";
import CardConocenos from "../../components/cardConocenos";
import CardMision from "../../components/cardMision";
import CardValores from "../../components/cardValores";
import CardMarcaAliada from "../../components/cardMarcaAliada";
import HistoriaTimeline from "../../components/historiaTimeline";
import CardRepresentante from "../../components/cardRepresentante";
import { Building2 } from "lucide-react";
import useScrollReveal from "../../components/useScrollReveal/useScrollReveal";


export function Conocenos() {
    useScrollReveal();
    const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const navigate = useNavigate();
    const location = useLocation();

    const [activeMenu, setActiveMenu] = useState("inicio");
    useEffect(() => {
        if (configuracionData) {
            getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
        }
    }, []);

    let jsonInfoConocenos = [
        { icono: 'target', titulo: 'MISIÓN', detalle: `${configuracionData?.mision}`, color: '#b8003e' },
        { icono: 'Eye', titulo: 'VISIÓN', detalle: `${configuracionData?.vision}`, color: '#003e8b' }
    ]

    let jsonInfoMarca = [
        { icono: 'Award', titulo: '8', detalle: 'PUNTO DE VENTA', color: '#002857' },
        { icono: 'Users', titulo: '1000+', detalle: 'CLIENTES SATISFECHOS', color: '#e60000' },
        { icono: 'Sparkles', titulo: '4+', detalle: 'AÑOS DE EXPERIENCIA', color: '#002857' }
    ]
    let jsonHistoria = [
        { anno: '2021', titulo: 'FUNDACIÓN', detalle: 'Motomovil de Colombia SAS se fundó con 3 puntos de venta. Premio al mejor vendedor de concesionarios nuevos.', color: '#e60000' },
        { anno: '2022', titulo: 'EXPANSIÓN', detalle: 'Apertura de nuevos puntos de venta en Cundinamarca y en los Llanos.', color: '#002857' },
        { anno: '2025', titulo: 'ACTUALIDAD', detalle: '8 puntos de venta consolidados en Colombia, liderando la distribución Suzuki.', color: '#e60000' }
    ]
    let jsonRepresentante = [
        { img: '/images/tvs.png', titulo: 'TVS', detalle: 'Líder en India, tecnología y rendimiento' },
        { img: '/images/victory.png', titulo: 'Victory', detalle: 'Motos urbanas confiables y económicas' },
        { img: '/images/kymco.png', titulo: 'Kymco', detalle: 'Scooters premium de Taiwán' },
        { img: '/images/benelli.png', titulo: 'Benelli', detalle: 'Estilo italiano y carácter deportivo' },
        { img: '/images/kawasaki.png', titulo: 'Kawasaki', detalle: 'La leyenda japonesa de las deportivas' },
        { img: '/images/zontes.png', titulo: 'Zontes', detalle: 'Tecnología china de vanguardia' },
        { img: '/images/ceronte.png', titulo: 'Ceronte', detalle: 'Soluciones de movilidad versátiles' },
        { img: '/images/electrico.jpg', titulo: 'Eléctricos', detalle: 'El futuro de la movilidad sostenible' }
    ]
    let jsonInfoValores = []
    try {
        if (configuracionData?.valores) {
            jsonInfoValores = JSON.parse(configuracionData.valores);
            //console.log(jsonInfoValores)
        }
    } catch (error) {
        console.error('Error al parsear valores:', error);
        jsonInfoValores = [];
    }
    const dataConocenos = [
        {
            icono: "CircleDollarSign",
            titulo: "Fundación",
            cuerpo: "Mayo de 2025",
            color: '#e60000'
        },
        {
            icono: "Building2",
            titulo: "Puntos actuales",
            cuerpo: "2 sedes",
            color: '#ffffff'
        },
        {
            icono: "users",
            titulo: "Proyección",
            cuerpo: "6 sedes",
            color: '#e60000'
        },
    ];
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
    //let imgtemp = '/images//fondoConocenos.png'
    return (
        <>
            <div style={{ background: "#ffffff" }}>
                <div className="promocion-container"
                    style={{
                         backgroundImage: `url('${configuracionData?.rutaPortadaConocenos}')`,
                      //  backgroundImage: `url('${imgtemp}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >

                    <button className="back-button" onClick={() => navigate("/")}>
                        <FaArrowLeft />
                    </button>


                    <div className="promocion-overlay">
                        <p></p>
                    </div>
                </div>
                <div style={{ borderBottom: '4px solid #b8003e' }}>
                    <div className='container reveal'>
                        <div className="contenedor__imagen__conocenos d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '10px' }}>
                                <Building2 size={60} style={{ color: '#b8003e', position: 'relative', bottom: '8px' }} /> CONÓCENOS

                            </h1>

                            <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565' }}>Distribuidor oficial de motocicletas Suzuki en Colombia</p>

                        </div>
                    </div>
                </div>

            </div>
            <div style={{ background: "#f9fafb" }}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">

                    <div className='container reveal'>
                        <div className=" d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '20px', paddingTop: '70px' }}>
                                QUIÉNES SOMOS

                            </h1>

                            {/* <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565', paddingBottom: '20px' }}>
                                MOTOMOVIL DE COLOMBIA SAS es una empresa colombiana líder en la distribución de motocicletas Suzuki. Nos destacamos por ofrecer productos de alta calidad, servicio técnico especializado y una atención al cliente excepcional. Con presencia en múltiples regiones del país, somos el socio de confianza para miles de colombianos que eligen Suzuki.
                            </p> */}
                             <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565', paddingBottom: '20px' }}>
                             {configuracionData?.historia}
                            </p> 


                        </div>
                    </div>

                    <div className="container reveal"  style={{ paddingBottom: '50px' }}>
                        <div className="row g-4">
                            {jsonInfoConocenos.map((item, index) => (
                                <div className="col-12 col-md-6" key={index}>
                                    <CardMision
                                        key={index}
                                        icono={item.icono}
                                        titulo={item.titulo}
                                        cuerpo={item.detalle}
                                        color={item.color}
                                    />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ background: "#fff" }}>
                <div className='container'>
                    <div className=" d-flex flex-column justify-content-center align-items-center text-center reveal">
                        <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '20px', paddingTop: '70px' }}>
                            NUESTROS VALORES

                        </h1>

                        <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565', paddingBottom: '20px' }}>
                            Principios que guían nuestro trabajo diario
                        </p>

                    </div>
                </div>
                <div className="container reveal" style={{ paddingBottom: "70px", paddingTop: "50px" }}>
                    <div className="row g-4"  >
                        {jsonInfoValores.map((item, index) => (
                            <div className="col-12 col-sm-6 md-4 col-lg-3" key={index}>
                                <CardValores
                                    key={index}
                                    icono={item.icono}
                                    titulo={item.titulovalor}
                                    cuerpo={item.descripcionValor}
                                    id={index + 1}
                                />
                            </div>

                        ))}
                    </div>
                </div>

            </div>

            <div style={{ background: "#f9fafb", paddingBottom: '30px' }}>
                <div className="container reveal">
                    <div className="justify-content-center align-items-center text-center " style={{ paddingTop: '70px' }}>
                        <h1 className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '700', letterSpacing: '0.05em', color: '#003e8b', paddingBottom: '20px', paddingTop: '30px' }}>NUESTRA HISTORIA</h1>
                        <p className="" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', color: '#4a5565', paddingBottom: '20px' }}>
                            El camino hacia el éxito
                        </p>
                    </div>
                    <HistoriaTimeline data={jsonHistoria} />
                </div>
            </div>

            <div style={{ background: 'linear-gradient(to bottom right,#003e8b,#b8003e)' }}>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="container reveal">

                        <div className="row g-4 justify-content-center align-items-center text-center" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
                            {jsonInfoMarca.map((item, index) => (
                                <div className="col-12 col-sm-6 md-4 col-lg-3" key={index}>
                                    <CardMarcaAliada
                                        key={index}
                                        icono={item.icono}
                                        titulo={item.titulo}
                                        cuerpo={item.detalle}
                                        colorTemp={item.color}

                                    />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
