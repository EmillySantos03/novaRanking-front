import React from "react";
import { ContainerImg } from "./style.js";
import { Link } from 'react-router-dom';

export default function Categories(props) {
   return (
      <ContainerImg>
         <Link to={"/empresas/" + props._id} >
            <div className="bloco">
               <img className="blocoimg"
                  src={props.profileImg} alt="icon categorias" />
               <h2 className="cat">{props.type}</h2>
            </div>
         </Link>
      </ContainerImg>
   );
}