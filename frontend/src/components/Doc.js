import React from "react";
import doc from "../assets/doc.jpg";

const Doc = ({ item }) => {
  return (
    <div className="hero-container" key={item.id}>
       
      <div><img height="200px" src={doc} className="poster" />
      <h3>{item.title}</h3>
      <div><h4>{item.summary}</h4></div>
      
      </div>
    </div>
  );
};

export default Doc;
