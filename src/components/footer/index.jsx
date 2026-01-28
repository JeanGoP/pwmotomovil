import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime, MdPhone } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LuMessageCircle } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import './footer.css';
import { LanguageContext } from "../../context/context";

function Footer() {
  const { configuracionData = [], getCofiguracion } = useContext(LanguageContext);
  const NIT = import.meta.env.VITE_API_NIT_EMPRESA;
  useEffect(() => {
    if (configuracionData) {
      getCofiguracion(NIT, 'Token', 'nit', 'USERFINALLY');
    }
  }, []);

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
      //navigate("/", { state: { scrollTo: id, activeMenu: id } });

    } else {
      // Ya estoy en Home → solo scroll
      scrollToId(id);

    }

  };
  const handleClickWhatsapp = () => {

    const telefono = "57" + configuracionData?.whatsapp;
    const mensaje = "Hola, quiero más información";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };
  return (
    <footer className="footer bg-dark text-light pt-5 contenido--footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="d-flex align-items-center mb-3">
              {/* <img
                src="/images/logoMotoAndesblanco.png"
                alt="Logo"
                style={{ height: "120px", width: '140px', marginRight: "10px" }}
              /> */}
              <div>
                <p className="mb-0" style={{fontWeight:'700' , fontSize:'20px'}}>MOTOMOVIL</p>
                {/* <small className="text-muted subtitulo--footer">Distribuidora autorizada de Auteco</small>  */}
              </div>
            </div>
            <p style={{ fontSize: "17px", textAlign: "justify", color: "rgb(177, 175, 175)" }}>
             Distribuidor oficial de motocicletas Suzuki. Calidad, confianza y pasión por las dos ruedas.
            </p>
            {/* <h6 className="text-danger fw-bold mb-3 texto--footer--menu">Síguenos</h6>  */}
            {/* <div className="d-flex gap-3 mt-3">
              <a href={configuracionData?.rutaInstagram || ''} target="_blank" rel="noreferrer" className="social-icon-instagram">
                <FaInstagram />
              </a>
              <a target="_blank" rel="noreferrer" className="social-icon-whatsapp" onClick={handleClickWhatsapp}>
                <LuMessageCircle />
              </a>
            </div> */}
          </div>

          <div className="col-12 col-sm-4 col-md-4 col-lg-2">
            <h6 className=" fw-bold mb-3 texto--footer--menu" >Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li><a onClick={() => handleNavigation("inicio")} style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer">Inicio</a></li>
              <li><NavLink style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/modelos"
              >
                Modelos
              </NavLink></li>
              <li><NavLink style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/posventa"
              >
                Posventa
              </NavLink></li>
              <li><NavLink style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/promocion"
              >
                Promociones
              </NavLink></li>
              <li><NavLink style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/cotizacion"
              >
                Cotización
              </NavLink></li>
              <li><NavLink style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/conocenos"
              >
                Conócenos
              </NavLink></li>
              <li><a style={{ fontSize: "16px", color: "rgb(177, 175, 175)",textDecoration:'none' }} className="a-footer"
               href="https://lineaetica.onrender.com/?empresa=Motomovil" target="_blank"  
              >
                Línea Ética
              </a>
              </li>
            </ul>
          </div>

          {/* <div className="col-12 col-sm-4 col-md-4 col-lg-3">
            <h6 className=" fw-bold mb-3 texto--footer--menu">Servicios</h6>
            <ul className="list-unstyled">
              <li><NavLink style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/posventa"
              >
                Servicio Técnico
              </NavLink></li>
              <li><NavLink style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/posventa"
              >
                Repuestos Originales
              </NavLink></li>
              <li><NavLink style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/cotizacion"
              >
                Financiación
              </NavLink></li>
              <li><a target="_blank" rel="noreferrer" onClick={handleClickWhatsapp} style={{ fontSize: "16px", color: "rgb(177, 175, 175)" }} className="a-footer">Seguros</a></li>
            </ul>
          </div> */}

          <div className="col-12 col-sm-4 col-md-4 col-lg-3">
            <h6 className=" fw-bold mb-3 texto--footer--menu" >Modelos</h6>
            <ul className="list-unstyled">
              {/* <li><NavLink style={{ fontSize: "15px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/conocenos"
              >
                Conócenos
              </NavLink></li> */}
              <li><NavLink style={{ fontSize: "15px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/modelos"
              >
                Automáticas
              </NavLink></li>
              <li><NavLink style={{ fontSize: "15px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/modelos"
              >
                Sport
              </NavLink></li>
              <li><NavLink style={{ fontSize: "15px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/modelos"
              >
                Enduro
              </NavLink></li>
              <li><NavLink style={{ fontSize: "15px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/modelos"
              >
                V-Strom
              </NavLink></li>
              <li><NavLink style={{ fontSize: "15px", color: "rgb(177, 175, 175)" }} className="a-footer"
                to="/modelos"
              >
                Alto Cilindraje
              </NavLink></li>
              
            </ul>
          </div>
            <div className="col-12 col-sm-4 col-md-4 col-lg-3">
            <h6 className=" fw-bold mb-3 texto--footer--menu">SÍGUENOS</h6>
            <ul className="list-unstyled">
              <li>
              <a href={configuracionData?.rutaInstagram || ''} target="_blank" rel="noreferrer" className="social-icon-instagram">
                <FaInstagram />
              </a>
              </li>
            </ul>
          </div> 
        </div>


        <hr className="mt-4" />
        <div className="d-flex flex-column justify-content-center align-items-center py-3 contenido--footer--g">
          <p
            className="mb-2"
            style={{ textAlign: "center", fontSize: "16px", color: "#fffc" }}
          >
            © 2025 MOTOMOVIL. Todos los derechos reservados.
          </p>

          <NavLink className="a--footer--g" to="/tratamientosDatos">
            Tratamiento de Datos
          </NavLink>
        </div>

      </div>
    </footer>
  );
}
export default Footer;