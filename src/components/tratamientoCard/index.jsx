import React from "react";
import './TratamientoCard.css'
import { CircleCheckBig } from "lucide-react";
const TratamientoCard = ({ titulo = '', bodyHtml = '', opcion = 'A',items = [] }) => {


  if (opcion == 'A') {
    return (
      <div className="card card-tratamiento" style={{textAlign:'justify'}}>
        <div className="card-body">
          <h5 className="card-title mb-3">{titulo}</h5>
          <div
            className="card-text text-secondary"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </div>
      </div>
    );
  }
  if (opcion == 'B') {
    return (
      <div className="card card-tratamiento">
        <div className="card-body">
          <h5 className="card-title mb-3">{titulo}</h5>
          <div className="card-text text-secondary">
            <ul style={{ listStyle: "none", padding: 0 }}>
              {items.map((text, index) => (
                <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                  
                  <p style={{ margin: 0 }}><CircleCheckBig size={23} color="#b8003e" style={{ marginRight: 10 }} /> {text}</p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    );
  }
  if (opcion == 'C') {
    return (
      <div className="card card-tratamiento" style={{textAlign:'justify'}}>
        <div className="card-body">
          <h5 className="card-title mb-3">{titulo}</h5>
          <div className="card-text text-secondary">
            <ul style={{ listStyle: "none", padding: 0 }}>
              {items.map((text, index) => (
                <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                 
                  <p style={{ margin: 0 }}>  <span style={{color:'#b8003e', fontSize:'20px'}}>•</span> {text}</p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    );
  }


};

export default TratamientoCard;
