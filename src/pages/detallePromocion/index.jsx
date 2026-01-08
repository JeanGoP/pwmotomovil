import React from "react";
import './detallePromocion.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import TratamientoCard from "../../components/tratamientoCard";
import { CircleCheckBig } from "lucide-react";

export function DetallePromocion() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState("promocion");

    const promocion = location.state?.promocion;
    if (!promocion) {
        return <p>No se encontró información de la promocion.</p>;
    }

    const handleNavigation = (id) => {
        setActiveMenu(id);
        navigate("/promocion", { state: { scrollTo: id } });
    };

//console.log(promocion.caracteristicas)
    const items =  promocion.caracteristicas
    ?.split(";")
    .map(item => item.trim())
    .filter(item => item.length > 0);


    const itemsCondiciones = promocion.condiciones
    ?.split(";")
    .map(item => item.trim())
    .filter(item => item.length > 0);
    
    const imagenPromocion = promocion.imagen || "/images/nophoto.jpg"
    return (
        <>
            <div style={{ background: "#ffffff" }}>
                <div className="detallepromocion-container"
                    style={{
                        backgroundImage: `url(${imagenPromocion})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                    }} >

                    <button className="detallepromocionback-button" onClick={() => handleNavigation("promocion")}>
                        <FaArrowLeft style={{ marginRight: '10px' }} /> Volver a Promociones
                    </button>


                    <div className="detallepromocion-overlay slide-in-right">
                        <div style={{ paddingBottom: '30px' }}><span className="detallepromocionbono">{promocion.categoria}</span> </div>
                        <p className="detallepromociontitulo">{promocion.descripcion}</p>
                        <p  className="detallepromocionDetalle">{promocion.descripcionPromo}</p>
                        <p className="detallepromociontitulo">{promocion.precio}<span className="detallepromocionAnterior">{promocion.precioAnterior}</span> </p>
                        <p className="detallepromocionIva">IVA INCLUIDO</p>
                    </div>
                </div>
                <div style={{ background: "#f9fafb" }}>
                    <div className="container" style={{ paddingBottom: '100px', paddingTop: '100px' }}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ paddingBottom: '50px' }}>
                                <TratamientoCard titulo='CARACTERÍSTICAS DESTACADAS' bodyHtml='' opcion='B' items={items} />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ paddingBottom: '50px' }}>
                                <div className="card card-oferta">
                                    <div className="card-body">
                                        <h5 className="ofertaTitulo">¡APROVECHA ESTA OFERTA!</h5>
                                        <p className="ofertaparrafo">
                                            Contacta a nuestros asesores para más información sobre esta promoción y financiación disponible.
                                        </p>
                                        <div className="ofertaseparador">
                                            <p className="ofertatexto">* Promoción válida en sedes participantes. Consulta disponibilidad y condiciones específicas con tu asesor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <TratamientoCard titulo='CONDICIONES' bodyHtml='' opcion='C' items={itemsCondiciones} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}