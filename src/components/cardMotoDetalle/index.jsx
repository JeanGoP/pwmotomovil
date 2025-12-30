import React, { useState } from "react";
import "./CardMotoDetalle.css";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const CardMotoDetalle = ({ nombre, subtitulo, descripcion, precio, colores }) => {
  const [colorSeleccionado, setColorSeleccionado] = useState(null);
  const [activeMenu, setActiveMenu] = useState("inicio");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };



  const handleNavigation = (id) => {
    setActiveMenu(id);

    if (location.pathname !== "/") {
      // No estoy en Home → voy a Home y le paso a dónde debo hacer scroll
      navigate("/", { state: { scrollTo: id } });

    } else {
      // Ya estoy en Home → solo scroll
      scrollToId(id);

    }

  };
  const handleClickWhatsapp = () => {

    const telefono = "573152959977";
    const mensaje = "Hola, quiero más información";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };
  return (
    <> <div className="col-12">
      <div className="motoObjeto-detalle">
       

          <div className="contenido--motoObjeto"><p className="motoObjeto-subtitulo">{subtitulo}</p></div>

          <p className="motoObjeto-descripcion">{descripcion}</p>

          <div className="motoObjeto-precio">
            <p className="precio--titulo">PRECIO</p>
            <p className="precio--moto">{precio.toLocaleString("es-CO")}</p>

          </div>

          <div className="motoObjeto-botones">
            <button className="btn btn-rojo--coti" > <NavLink style={{ color: "white", textDecoration: "none" }} to="/cotizacion" > Solicitar cotización</NavLink></button>

          </div>
        </div>
      </div>

    </>
  );
};

export default CardMotoDetalle;
