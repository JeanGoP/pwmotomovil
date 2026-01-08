import './home.css';
import Cards from '../../components/view/card';
import SectionHeader from '../../components/view/sectionHeader';
import SectionHeaderLiteBtn from '../../components/view/sectionHeaderLiteBtn';
import BotonFiltro from '../../components/view/botonFiltro';
import BotonFiltroPromocion from '../../components/view/botonFiltroPromocion/index.jsx';
import Contacto from '../../components/view/contacto'
import CarouselHero from '../../components/carousel';
import RepuestoServicio from '../../components/repuestoServicio';
import { useState, useEffect, useContext } from "react";
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { LanguageContext } from '../../context/context.jsx';
import CardSkeleton from '../../components/CardSkeleton/index.jsx';
import AseguradoraCard from '../../components/view/aseguradoraCard';
import { MapPin } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Package } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CircleCheckBig } from 'lucide-react';
import { useRef } from "react";
import CardSedes from '../../components/cardSedes/index.jsx';
import CardAliados from '../../components/cardAliados/index.jsx';
import { Funnel } from 'lucide-react';
import CardPuntosVentas from '../../components/cardPuntosVentas/index.jsx';
import InformacionSede from '../../components/informacionSede/index.jsx';
import useScrollReveal from '../../components/useScrollReveal/useScrollReveal.jsx';

export function Home() {
    useScrollReveal();
    const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
    const location = useLocation();
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("inicio");
    const rutaImgPortada = '/images/FondoMotoAndes.png';
    const rutaImgPortada_2 = '/images/FondoMoto2.png';
    const [activeBtn, setActiveBtn] = useState("TODOS");

    //AYODERA
    const [activeDepto, setActiveDepto] = useState(null);
    const [activeCity, setActiveCity] = useState(null);
    const [activeRpt, setActiveRpt] = useState(true);


    const aliados = [
        { imagen: "/images//bancoBogota.png", titulo: "Banco de Bogotá", cuerpo: "Créditos con tasas preferenciales" },
        // { imagen: "/images//vanti.png", titulo: "Vanti", cuerpo: "Soluciones financieras innovadoras con apoyo integral y constante." },
        { imagen: "/images//crediorbe.png", titulo: "CrediOrbe", cuerpo: "Financiación flexible" },
        { imagen: "/images//progreser.png", titulo: "ProgreSer", cuerpo: "Soluciones de crédito rápido" },
        { imagen: "/images//sistecredito.png", titulo: "SisteCrédito", cuerpo: "Planes de financiación accesibles" },
        { imagen: "/images//Addi.png", titulo: "Addi", cuerpo: "Apoyo financiero especializado" },
        { imagen: "/images//sufi.png", titulo: "Sufi", cuerpo: "Créditos para motos" },
        { imagen: "/images//Finamiga.png", titulo: "Finamiga", cuerpo: "Tu aliado en financiación" },
        { imagen: "/images//Venfi.png", titulo: "Venfi", cuerpo: "Beneficios en crédito" }
    ];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const jsonInfo = [
        { icono: 'bike', titulo: 'Variedad de modelos', detalle: 'Amplia gama de motocicletas Hero para cada estilo de vida y necesidad', menu: 'modelos' },
        { icono: 'configure', titulo: 'Servicio postventa', detalle: 'Mantenimiento especializado y repuestos originales con garantía completa', menu: 'venta' },
        { icono: 'info', titulo: 'Conócenos', detalle: 'Nuestra historia, valores y compromiso contigo', menu: '/conocenos' }
    ]

    const jsonsedes = [
        {
            nombre: 'Medellín - Barrio Belén',
            direccion: 'Carrera 76 #28-115, Medellín',
            telefono: '(604) 456 7890',
            horario: 'Lunes a Sábado: 07:00 AM - 06:00 PM',
            email: 'medellinbelen@auteco.com',
            rutagoogle: 'https://www.google.com/maps/search/Carrera+76+28-115+Medellín'
        }
        ,
        {
            nombre: 'Bello',
            direccion: 'Carrera 50 #33-90, Bello',
            telefono: '(604) 456 7891',
            horario: 'Lunes a Sábado: 07:00 AM - 06:00 PM',
            email: 'bello@auteco.com',
            rutagoogle: 'https://www.google.com/maps/search/Carrera+50+33-90+Bello'
        }
    ]
    const jsonelegirnos = [

        {
            icono: 'shield',
            titulo: 'GARANTÍA OFICIAL',
            detalle: 'Respaldo de fábrica en todas nuestras motocicletas',
            servicio: [],
            btn: ''
        },
        {
            icono: 'confi',
            titulo: 'CALIDAD SUZUKI',
            detalle: 'Tecnología japonesa de última generación',
            servicio: [],
            btn: ''
        },
        {
            icono: 'setting',
            titulo: 'SERVICIO TÉCNICO',
            detalle: 'Te acompañamos en cada paso de tu compra',
            servicio: [],
            btn: ''
        },
        {
            icono: 'package',
            titulo: 'ASESORÍA EXPERTA',
            detalle: 'Equipo de profesionales a tu servicio',
            servicio: [],
            btn: ''
        },
        {
            icono: 'package',
            titulo: 'RESPUESTA RÁPIDA',
            detalle: 'Atención inmediata a tus necesidades',
            servicio: [],
            btn: ''
        },
        {
            icono: 'package',
            titulo: 'MÚLTIPLES SEDES',
            detalle: 'Presencia en las principales ciudades',
            servicio: [],
            btn: ''
        }

    ]
    const jsonServicioPosventa = [
        {
            icono: 'package',
            titulo: 'Repuestos originales',
            detalle: 'Piezas genuinas de fábrica para tu moto',
            servicio: [],
            btn: ''
        },

        {
            icono: 'confi',
            titulo: 'Servicio técnico',
            detalle: 'Mantenimiento y diagnóstico especializado',
            servicio: [],
            btn: ''
        },
        {
            icono: 'setting',
            titulo: 'Aliados financieros',
            detalle: 'Financiación y crédito accesible',
            servicio: [],
            btn: ''
        },
        {
            icono: 'shield',
            titulo: 'Seguros',
            detalle: 'Convenio con aseguradoras de confianza',
            servicio: [],
            btn: ''
        }

    ]
    const jsonGarantias = [
        {
            icono: '/images/logoscobar.png',
            titulo: 'Escobar y Duque',
            detalle: 'Expertos en seguros para motos con cobertura nacional y atención personalizada.',
            servicio: [],
            btn: ''
        },

        {
            icono: '/images/logogarantia.png',
            titulo: 'Garantimotos',
            detalle: 'Protección integral para tu moto con respaldo confiable y rápido.',
            servicio: [],
            btn: ''
        }]
    const jsonDepartamento = [
        { id: "1", nombre: "Meta" },
        { id: "2", nombre: "Cundinamarca" },
        { id: "3", nombre: "Tolima" },
        { id: "4", nombre: "Casanare" },
        { id: "5", nombre: "Guaviare" }
    ];

    const jsonSedeDepartamento = [
        { id: "1", id_departamento: "1", nombre: "Acacías", direccion: 'Cra. 23 #14-47', telefono: '+57 3046346735', departamento: 'Meta' },
        { id: "2", id_departamento: "1", nombre: "Villavicencio", direccion: 'Calle 35 #20D-04', telefono: '+57 3112099201', departamento: 'Meta' },
        { id: "3", id_departamento: "1", nombre: "Puerto Gaitán", direccion: 'Transversal 9 #8-69', telefono: '+57 3204636115', departamento: 'Meta' },
        { id: "4", id_departamento: "1", nombre: "Cumaral", direccion: 'Calle 12 #17-56', telefono: '+57 3156205328', departamento: 'Meta' },
        { id: "5", id_departamento: "2", nombre: "Restrepo", direccion: 'Avenida Caracas #21-15 Sur', telefono: '+57 3133262558', departamento: 'Cundinamarca' },
        { id: "6", id_departamento: "3", nombre: "Melgar", direccion: 'Cra. 22 #6-23', telefono: '+57 3142415989', departamento: 'Tolima' },
        { id: "7", id_departamento: "4", nombre: "Yopal", direccion: 'Calle 24 #23-72', telefono: '+57 3123252644', departamento: 'Casanare' },
        { id: "8", id_departamento: "5", nombre: "San José del Guaviare", direccion: 'Cra. 20 #8-19', telefono: '+57 3208644054', departamento: 'Guaviare' }
    ];


    const [departamento, setDepartamento] = useState("");
    const [sedes, setSedes] = useState([]);
    const [sedeSeleccionada, setSedeSeleccionada] = useState(null);

    const handleSede = (e) => {
        const idSede = e.target.value;

        if (!idSede) {
            setSedeSeleccionada(null);
            return;
        }

        const sede = jsonSedeDepartamento.find(
            (s) => s.id === idSede
        );

        setSedeSeleccionada(sede);
    };
    const handleDepartamento = (e) => {
        const idDepartamento = e.target.value;
        setDepartamento(idDepartamento);

        const sedesFiltradas = jsonSedeDepartamento.filter(
            (sede) => sede.id_departamento === idDepartamento
        );
        if(!idDepartamento){
            setSedeSeleccionada(null);
        }
        setSedes(sedesFiltradas);
    };


    const { productos, productoSeleccionado, marcaFiltro, getProductos, getSegmentos, segmentos, configuracionData = [], desplazamiento, getCofiguracion } = useContext(LanguageContext);
    useEffect(() => {
        getProductos();
        console.log(productos)
        
    }, []);
    useEffect(() => {
        if (configuracionData) {
            getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
        }
    }, []);
    let departamentos = []

    try {
        if (configuracionData?.sucursal) {
            departamentos = JSON.parse(configuracionData?.sucursal);
            // console.log(departamentos)
        }
    } catch (error) {
        console.error('Error al parsear promocionesImagen:', error);
        departamentos = [];
    }

    const selectedDepto = departamentos.find((d) => d.nombre === activeDepto);
    const selectedCity = selectedDepto?.ciudades.find((c) => c.nombre === activeCity);

    useEffect(() => {
        const target = location.state?.scrollTo;
        if (target) {

            setTimeout(() => {
                const el = document.getElementById(target);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

                navigate(".", { replace: true, state: null });
            }, 0);
        }
    }, [location.state, navigate]);

    //consumo API
    const buttons = ["TODOS", ...segmentos.map(seg => seg.segmento_nombre)];
    const [cantidadMostrar, setCantidadMostrar] = useState(4);

    let id_tempProductos = ["303", "331", "301", "335"]
    const productosFiltrados = productos.filter((producto) => {
        return (
            producto.lista_precio_id === "1" &&
            id_tempProductos.includes(String(producto.producto_id))
        );
    });


    const productosParaMostrar = productosFiltrados.slice(0, cantidadMostrar);
    const cargarMas = () => {
        setCantidadMostrar((prev) => prev + 8);
    };

    useEffect(() => {
        setCantidadMostrar(4);
    }, [marcaFiltro, activeBtn]);

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
    const handleClickWhatsapp = () => {

        const telefono = "57" + configuracionData?.whatsapp;
        const mensaje = "Hola, quiero más información";
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    };
    let imageTemp = ["/images/FondoMotomovil_1.png", "/images/FondoMotomovil_2.png", "/images/FondoMotomovil_3.png"]
    return (

        <div style={{ background: '#f9fafb' }}>
            {/* Menu de inicio */}
            <div id="inicio" className='contenedor-carousel'>
                 <CarouselHero img={configuracionData?.rutaImgCarrousel || ''} /> 
                {/* <CarouselHero img={imageTemp} /> */}
            </div>

            <div id="modelos" className='home--contenido--2' >
                {/* Modelos */}
                <div style={{ background: '#f9fafb', paddingBottom: '70px', paddingTop: '20px' }} className='reveal'>
                    <div className="container my-5">
                        <SectionHeader
                            titulo='MODELOS DESTACADOS'
                            cuerpo='Descubre nuestra selección de motocicletas Suzuki'
                            titleSize="clamp(1.5rem, 3vw, 2.7rem)"
                            subtitleSize="clamp(1.1rem, 2vw, 1.1rem)"
                        />
                    </div>
                    <div className='container'>
                        <div className="row custom-gap">
                            {productosParaMostrar.length === 0 ? (
                                Array(4).fill(0).map((_, index) => <CardSkeleton key={index} />)
                            ) : (
                                productosParaMostrar.map((producto, index) => (
                                    <div
                                        key={index}
                                        className="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex"
                                        style={{ marginBottom: "34px" }}
                                    >
                                        <Cards
                                            icono=""
                                            titulo={producto.producto_nombre}
                                            // categoria={producto.marca_nombre || ''}
                                            categoria={
                                                producto.segmento && producto.segmento.length > 0 && producto.segmento[0] !== ""
                                                    ? producto.segmento[0]
                                                    : "TODOS"
                                            }
                                            cuerpo={
                                                producto.segmento && producto.segmento.length > 0 && producto.segmento[0] !== ""
                                                    ? producto.segmento[0]
                                                    : "N/A"
                                            }
                                            precio={(() => {
                                                const precios = producto.precio || {};
                                                const añosDisponibles = Object.keys(precios)
                                                    .map(Number)
                                                    .filter((año) => precios[año]);

                                                if (añosDisponibles.length === 0) {
                                                    return "Precio No Disponible";
                                                }

                                                const añoMasReciente = Math.max(...añosDisponibles);
                                                const precio = precios[añoMasReciente];

                                                return `${Number(precio).toLocaleString("es-CO", {
                                                    style: "currency",
                                                    currency: "COP",
                                                    minimumFractionDigits: 0,
                                                })}`;
                                            })()}
                                            listaItems=""
                                            imagen={producto.imagen_portada || "/images/nophoto.jpg"}
                                            opcion="M"
                                            motObject={producto}
                                            cilindraje={
                                                Array.isArray(producto.ficha_tecnica)
                                                    ? producto.ficha_tecnica.find(x => x.ficha_tecnica_id === '1')?.ficha_tecnica_detalle
                                                    : " "
                                            }
                                        />
                                    </div>
                                ))
                            )}

                            {1 === 1 && (
                                <div className="text-center mt-4">
                                    <button className="btn btn-outline-primary btn__mostrarMas" onClick={() => handleNavigation('/modelos')}>
                                        <span className='spanicono--mostrar'></span> VER TODOS LOS MODELOS
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div style={{ background: '#fff', paddingTop: '10px', paddingBottom: '20px' }}>
                    <div className="container my-5">

                        <div id="elegir" className='row g-4 reveal'>
                            <SectionHeader
                                titulo='¿POR QUÉ ELEGIRNOS?'
                                cuerpo='Somos más que un distribuidor, somos tu aliado en cada kilómetro'
                                titleSize="clamp(1.2rem, 2vw, 2rem)"
                                subtitleSize="clamp(1.2rem, 2vw, 1.2rem)"
                                opcion='D'
                            />
                        </div>


                    </div>
                    <div className='container-fluid reveal'>
                    <div className='row g-4 align-items-stretch' style={{paddingBottom:'80px'}}>
                            {jsonelegirnos.map((item, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
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
                                        btn={item.btn}
                                        whatsapp={configuracionData?.whatsapp || ''}

                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className='home--contenido--1' style={{ background: 'linear-gradient(to bottom right,#b8003e,#003e8b)' }}>
                    <div className="container  my-2" style={{ paddingBottom: '40px' }}>
                        <div className='row g-4 justify-content-center video-youtube-container reveal'>
                            <SectionHeaderLiteBtn
                                titulo='EXPERIENCIA SUZUKI'
                                cuerpo='Descubre la pasión y la tecnología detrás de cada motocicleta'
                                 urlyoutube={configuracionData?.rutaYoutube || ''}
                               // urlyoutube='https://www.youtube.com/embed/bhOQENDTIkA'
                                opcion='A'
                            />

                        </div>
                    </div>
                </div>
                {/* <div style={{ background: '#002857', paddingTop: '50px', paddingBottom: '50px' }}>
                    <div className="container my-5">
                      
                        <div id="venta" className='row g-4'>
                            <SectionHeader
                                titulo='Servicios & Posventa'
                                cuerpo='Te acompañamos después de tu compra con servicios integrales'
                                titleSize="clamp(1.2rem, 2vw, 1.4rem)"
                                subtitleSize="clamp(1.2rem, 2vw, 1.3rem)"
                                opcion='D'
                            />
                        </div>
                        <div className='row g-4 align-items-stretch' style={{ paddingBottom: '20px' }}>
                            {jsonServicioPosventa.map((item, index) => (
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
                                        opcion='S'
                                        btn={item.btn}
                                        whatsapp={configuracionData?.whatsapp || ''}

                                    />
                                </div>
                            ))}

                        </div>
                   
                        <div id="ubicacions" >
                            <div className="text-center mt-3">
                                <button className="btn btn-outline-primary btn__mostrarMasposventa" onClick={() => handleNavigation('/posventa')}>
                                    <span className='spanicono--mostrar'></span> Ver más servicios
                                </button>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
            {/* yodera */}
            <div id="id_repuesto" className="" style={{ backgroundColor: '#002857', paddingTop: '11px', paddingBottom: '16px' }}>

            </div>
            {/* cierre */}
            <div className='home--contenido--1' id='ubicacionInicio'>
                <div className="container">
                    <div className='row g-4 justify-content-center video-youtube-container'>

                        <div className="section-header-Lite text-center reveal">
                            <p className="section-title-Lite" style={{ color: '#003e8b' }}>
                                NUESTRAS SEDES
                            </p>
                            <p className="" style={{fontFamily:'Poppins, sans-serif', fontSize:'20px', paddingBottom:'20px'}}>
                                Encuéntranos en las principales ciudades del país
                            </p>

                            {/* <div className="video-container">

                                <iframe width="1024"
                                    height="700"
                                    src='https://www.google.com/maps/d/embed?mid=15l5c909Boe6fnAfvuJkmni6cIdMDscA&amp;ehbc=2E312F'
                                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de ubicaciones de nuestras sedes"
                                >

                                </iframe>

                            </div> */}
                        </div>
                    </div>
                    <div className='reveal' style={{ alignItems: 'center', justifyItems: 'center', paddingBottom: '35px' }} >
                        <div className='row'>
                            <div className='col-sm-12 col-md-12 col-lg-12'>
                                <div className="departamento-card">
                                    <div className="departamento-header">
                                        <span className="departamento-icono"><Funnel /></span>
                                        <h5 className="departamento-titulo">FILTRAR SEDES</h5>
                                    </div>

                                    <div className="departamento-grid">
                                        <div className="departamento-campo">
                                            <label>DEPARTAMENTO</label>
                                            <select onChange={handleDepartamento}>
                                                <option value="">Seleccionar Departamento</option>
                                                {jsonDepartamento.map((dep) => (
                                                    <option key={dep.id} value={dep.id}>
                                                        {dep.nombre}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="departamento-campo">
                                            <label>SEDE</label>
                                            <select disabled={!departamento} onChange={handleSede}>
                                                <option value="">Seleccionar Sede</option>
                                                {sedes.map((sede) => (
                                                    <option key={sede.id} value={sede.id}>
                                                        {sede.nombre}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row g-4 align-items-stretch row__Visitanos__ubicacion reveal'  style={{ paddingBottom: '20px' }}>
                        {/* {jsonsedes.map((item, index) => (
                            <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                                <CardSedes
                                    key={index}
                                    titulo={item.nombre}
                                    direccion={item.direccion}
                                    telefono={item.telefono}
                                    horario={item.horario}
                                    email={item.email}
                                    rutaMaps={item.rutagoogle}

                                />
                            </div>
                        ))} */}
                        <div className="col-sm-12 col-md-6 col-lg-6" >
                            <div className='contenedoRow'>
                                <div className="video-container" style={{ height: '500px' }}>

                                    <iframe width="1024"
                                        height="800"
                                        src='https://www.google.com/maps/d/embed?mid=15l5c909Boe6fnAfvuJkmni6cIdMDscA&amp;ehbc=2E312F'
                                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de ubicaciones de nuestras sedes"
                                    >

                                    </iframe>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6" >
                            <div className='contenedoRow'>
                                <div className="contenido__cardPuntosVentas__Visitanos">
                                    <p className="" style={{ color: '#003e8b', fontWeight: '700', fontSize: '20px', fontFamily:'Poppins, sans-serif' }}>
                                    {!sedeSeleccionada ? (   'TODAS NUESTRAS SEDES' ) : ('')}
                                    </p>
                                    {!sedeSeleccionada ? (
                                       
                                        jsonSedeDepartamento.map((item, indice) => (
                                            <CardPuntosVentas
                                                key={indice}
                                                Nombre={item.nombre}
                                                Direccion={item.direccion}
                                                Telefono={item.telefono}
                                                RutaGoogleMaps=""
                                                departamento={item.departamento}
                                            />
                                        ))
                                    ) : (
                                        <div className="slide-in-right" key={sedeSeleccionada.id} style={{paddingTop:'20px'}}> 
                                        <InformacionSede
                                            Nombre={sedeSeleccionada.nombre}
                                            departamento={sedeSeleccionada.departamento}
                                            Direccion={sedeSeleccionada.direccion}
                                            Telefono={sedeSeleccionada.telefono}
                                        />
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aliadosFinancierosPadre'>
                <div className='aliadosFinancieros' style={{ paddingBottom: '150px', paddingTop: '30px' }}>
                    <div className="decor-circle"></div>
                    <div className="decor-square"></div>
                    <div className="container my-4" id='aliados'>
                        <div className='row g-4 card--stecnico reveal'>
                            <SectionHeader
                                titulo='Aliados Financieros'
                                cuerpo='Trabajamos con las mejores entidades para facilitar tu financiación'
                                titleSize="clamp(1.8rem, 3vw, 2.5rem)"
                                subtitleSize="clamp(1.1rem, 2vw, 1.2rem)"
                                opcion='AL'
                            />
                        </div>

                        <div className="row g-4 justify-content-center reveal" style={{ marginBottom: "50px" }}>
                            {aliados.map((aliado, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 " key={index}>
                                    <CardAliados
                                        imagen={aliado.imagen}
                                        titulo={aliado.titulo}
                                        cuerpo={aliado.cuerpo}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: '#f9fafb', paddingBottom: '50px' }}>
                <div className='container'>
                    <div className='row reveal'>
                        <AseguradoraCard icono='./images/garantimotos.png' titulo='Garantimotos' descripcion='Protección confiable para que disfrutes tu moto con tranquilidad.' jsonGarantias={jsonGarantias} />
                    </div>
                    <div>
                        <div className="text-center reveal">
                            <button className="btn btn-outline-primary btn__mostrarMasCotizacion" onClick={handleClickWhatsapp} rel="noopener noreferrer">
                                <span className='spanicono--mostrar'></span> SOLICITAR COTIZACIÓN
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
