import React from "react";
import './motocicleta.css'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Moto360Viewer from "../../components/moto360Viewer";
import CardMotoDetalle from "../../components/cardMotoDetalle";
import SectionHeader from "../../components/view/sectionHeader";
import CardDetalle from "../../components/cardDetalle";
import Interesar from "../../components/interesar";
import Especificaciones from "../../components/especificaciones";
import FichaTecnica from "../../components/fichaTecnica";
export function Motocicleta() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("inicio");
    const [detalleActivo, setDetalleActivo] = useState(null);
    const motosTemp = ["/images/moto_1.png", "/images/moto_2.png", "/images/moto_3.png", "/images/moto_4.png", "/images/moto_5.png", "/images/moto_6.png"]
    const moto = location.state?.moto;
    if (!moto) {
        return <p>No se encontró información de la motocicleta.</p>;
    }
   
    const [coloresMoto, setColoresMoto] = useState(() => {
        if (moto?.color && moto.color.length > 0) {
            return moto.color.map((c, index) => ({
                nombre: c.color_name,
                colorHex: c.color_code && c.color_code.trim() !== "" ? c.color_code : "#ffff",
                extra:
                    index === 0 && moto?.imagenes && moto.imagenes.length > 0
                        ? "Vista 360º"
                        : null
            }));
        }
        return [];
    });

    const getFichasPorIds = (fichaTecnica = [], ids = []) =>
        ids.map(id =>
            fichaTecnica.find(ft => String(ft.ficha_tecnica_id) === String(id))
                ?.ficha_tecnica_detalle || "No disponible"
        );
    const getFichaPorId = (fichaTecnica = [], id) => {
        const item = fichaTecnica.find(
            ft => String(ft.ficha_tecnica_id) === String(id)
        );

        return item?.ficha_tecnica_detalle || "No disponible";
    };
    const ficha_tecnica_cilindraje = getFichaPorId(moto.ficha_tecnica ?? [], '1');
    const ficha_tecnica_potencia = getFichaPorId(moto.ficha_tecnica ?? [], '21');
    const ficha_tecnica_torque = getFichaPorId(moto.ficha_tecnica ?? [], '22');
    const ficha_tecnica_peso = getFichaPorId(moto.ficha_tecnica ?? [], '13');

    let motor = getFichaPorId(moto.ficha_tecnica ?? [], '11');
    let alimentacion = getFichaPorId(moto.ficha_tecnica ?? [], '5');
    let transmision = getFichaPorId(moto.ficha_tecnica ?? [], '12');
    let frenodelante = getFichaPorId(moto.ficha_tecnica ?? [], '8');
    let frenotrasero = getFichaPorId(moto.ficha_tecnica ?? [], '9');
    let tanque = getFichaPorId(moto.ficha_tecnica ?? [], '16');
    let suspenciondelantera = getFichaPorId(moto.ficha_tecnica ?? [], '6');
    let suspenciontrasera = getFichaPorId(moto.ficha_tecnica ?? [], '7');


    const imagenMoto = moto.imagen_portada || "/images/nophoto.jpg"
    const imagenTemp = [imagenMoto]
    const [imgMotos360, setImgMotos360] = useState(
        moto?.imagenes && moto.imagenes.length > 0
            ? moto.imagenes
            : imagenTemp//motosTemp//["/images/nophoto.jpg"]
    );
    const cant = moto?.imagenes && moto.imagenes.length > 0 ? '2' : '1'
    const handleNavigation = (id) => {
        setActiveMenu(id);
        navigate("/modelos", { state: { scrollTo: id } });
    };
    const [colorSeleccionado, setColorSeleccionado] = useState(null);
    return (
        <>
            <div style={{ background: "#ffffff" }}>
                <div className="motocicleta-container"
                    style={{
                        backgroundImage: `url(${imagenMoto})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                    }} >
                    {/* Botón circular */}
                    <button className="back-button" onClick={() => handleNavigation("modelos")}>
                        <FaArrowLeft />
                    </button>

                    {/* Título centrado */}
                    <div className="promocion-overlay">
                        <p>{moto.producto_nombre}</p>
                    </div>
                </div>

                <div className="container-fluid contenido--caracteristicas my-5">
                    <div className="row ">
                        <div className="col-sm-12 col-md-12 col-lg-6" style={{ marginBottom: "30px" }}>
                            <Moto360Viewer images={imgMotos360} op={cant} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <CardMotoDetalle
                                nombre={moto.marca_nombre || 'No hay registro'}
                                subtitulo={
                                    moto.segmento && moto.segmento.length > 0 && moto.segmento[0] !== ""
                                        ? moto.segmento[0]
                                        : "TODOS"
                                }
                                descripcion={moto.descripcion_amplia || 'No hay registro'}
                                precio={(() => {
                                    const precios = moto.precio || {};
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
                                colores={coloresMoto}
                            />
                        </div>
                        <div className="col-12">
                            <div className="motoObjeto-colores">
                                <p className="colores">COLORES DISPONIBLES</p>

                                <div className="colores-grid">
                                    {coloresMoto.map((c, i) => (
                                        <button
                                            key={i}
                                            className={`color-btn ${colorSeleccionado === i ? "activo" : ""}`}
                                            onClick={() => setColorSeleccionado(i)}
                                        >
                                            <span
                                                className="color-circle"
                                                style={{
                                                    background: c.colorHex?.startsWith("linear")
                                                        ? c.colorHex
                                                        : c.colorHex || "#fff"
                                                }}
                                            />
                                            <span className="color-nombre">{c.nombre}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ background: "#f9fafb", paddingTop: "20px" }}>
                <div className="container-fluid contenido--caracteristicas">
                    <div className='row g-4 justify-content-center align-items-center text-center'>
                        <p style={{ fontSize: '2.2rem', color: '#003e8b', paddingTop: '20px', paddingBottom: '20px', fontFamily: ' Poppins, sans-serif', fontWeight: '700', letterSpacing: '0.05em', opacity: '1' }}>DETALLES DEL MODELO</p>
                    </div>
                    <div className="row row--cards-especificiacion">
                        <div className="col-sm-12 col-md-6 col-lg-3" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="CILINDRAJE"
                                icono="Gauge"
                                descripcion={ficha_tecnica_cilindraje}

                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="POTENCIA"
                                icono="Zap"
                                descripcion={ficha_tecnica_potencia}

                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="TORQUE"
                                icono="Activity"
                                descripcion={ficha_tecnica_torque}


                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3" style={{ paddingBottom: "40px" }}>
                            <CardDetalle
                                titulo="PESO"
                                icono="Weight"
                                descripcion={ficha_tecnica_peso}

                            />
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12" style={{ paddingBottom: "40px" }}>
                            {detalleActivo && (
                                <div className="row">
                                    <div className="col-12 pb-4">
                                        <Especificaciones
                                            titulo={detalleActivo.titulo}
                                            json={detalleActivo.json}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div> */}

                </div>
            </div>
            <div style={{ background: "#ffffff" }}>
                <div className="container" style={{ paddingBottom: "100px", paddingTop: "50px" }}>
                    <div className='row g-4 justify-content-center align-items-center text-center'>
                        <p style={{ fontSize: '2.2rem', color: '#003e8b', paddingTop: '20px', paddingBottom: '20px', fontFamily: ' Poppins, sans-serif', fontWeight: '700', letterSpacing: '0.05em', opacity: '1' }}>
                            ESPECIFICACIONES ESPECÍFICAS
                        </p>
                    </div>


                    <div className='g-4 justify-content-center align-items-center'>
                        <FichaTecnica
                            titulo1="Tipo de motor"
                            valor1={motor}
                            titulo2="Sistema de alimentación"
                            valor2={alimentacion}
                            titulo3="Transmisión"
                            valor3={transmision}
                            titulo4="Sistema de frenos delantero"
                            valor4={frenodelante}
                            titulo5="Sistema de frenos trasero"
                            valor5={frenotrasero}
                            titulo6="Capacidad de tanque"
                            valor6={tanque}
                            titulo7="Suspensión delantera"
                            valor7={suspenciondelantera}
                            titulo8="Suspensión trasera"
                            valor8={suspenciontrasera}
                        />
                    </div>
                </div>


            </div>

            <div style={{ background: "#f9fafb" }}>
                <div className="container-fluid contenido--caracteristicas" style={{ paddingBottom: "50px", paddingTop: "70px" }}>
                    <div className='row g-4'>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{ paddingBottom: "10px" }}>
                            <Interesar opcion="A" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6" style={{ paddingBottom: "10px" }}>
                            <Interesar opcion="B" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}