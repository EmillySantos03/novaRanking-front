import React from "react";
import { ContainerImg } from "./style.js";
import { Link } from 'react-router-dom';

export default function Businesses(props) {
   return (
      <ContainerImg>
         <Link to={"/avaliacao/" + props._id}>
            <div className="bloco">
               <div className="name">
                  <div className="cat" key={props._id}>{props.name}</div>
                  <div className="cat" key={props._id}>{props.operation}</div>
                  <div className="cat" key={props._id}>{props.address}</div>
               </div>
               <img key={props._id} className="blocoimg" src={props.profileImg} alt="imagem das empresas" />
            </div>
         </Link>
      </ContainerImg>

   );
}