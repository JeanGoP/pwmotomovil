import React from "react";
import "./HistoriaTimeline.css";
import { Calendar } from "lucide-react";

const HistoriaTimeline = ({ data }) => {
  return (
    <section className="HistoriaTimeline">
      <div className="HistoriaLinea">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`HistoriaItem ${isLeft ? "HistoriaLeft" : "HistoriaRight"}`}
            >
              <div className="HistoriaCard">
                <div className="HistoriaAnno">
                  <span className="HistoriaIcono"><Calendar size={30} style={{position:'relative', bottom:'4px'}}/> {item.anno}</span>
                 
                </div>

                <h4 className="HistoriaTitulo">{item.titulo}</h4>
                <p className="HistoriaDetalle">{item.detalle}</p>
              </div>

              <span className="HistoriaPunto" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HistoriaTimeline;
