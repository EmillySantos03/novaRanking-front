import React, { useState, useEffect } from "react";
import { Container } from "./styles.js";
import Categories from "../../components/Categories";
import api from "../../services/api";

/*import supermercados from '../../assets/supermercados.svg';
import restaurantes from '../../assets/restaurantes.svg';
import padarias from "../../assets/padarias.svg"
import pizzarias from "../../assets/pizzarias.svg"
import sorveterias from "../../assets/sorveterias.svg"
import bares from "../../assets/bares.svg"
import lojasconfeccoes from "../../assets/lojasconfeccoes.svg"
import lojasinformatica from "../../assets/lojasinformatica.svg"
import postosabastecimento from "../../assets/postosabastecimento.svg"*/

export default function Home() {
   const [list, setList] = useState([]);
   useEffect(() => {
      async function loadList() {
         const response = await api.get("/category");
         setList(response.data);
      }
      loadList();
   }, [list]);




   return (

      <Container>
         <div className="content">
            {list &&
               list.map(l => (
                  <Categories
                     _id={l._id}
                     type={l.type}
                     profileImg={l.profileImg}
                  />
               ))}
         </div>


         {
         /*
         <div className="content">

            <Link to="/supermercados">
               <div className="bloco">
                  <img className="blocoimg" src={supermercados} alt="icon supermercados" />
                  <h2 className="cat">Supermercados</h2>
               </div>
            </Link>

            <Link to="/restaurantes">
               <div className="bloco">
                  <img className="blocoimg" src={restaurantes} alt="icon restaurantes" />
                  <h2 className="cat">Restaurantes</h2>
               </div>
            </Link>

            <Link to="/padaria">
               <div className="bloco">
                  <img className="blocoimg" src={padarias} alt="icon padarias" />
                  <h2 className="cat">Padarias</h2>
               </div>
            </Link>

            <Link to="/pizzarias">
               <div className="bloco">
                  <img className="blocoimg" src={pizzarias} alt="icon pizzarias" />
                  <h2 className="cat">Pizzariass</h2>
               </div>
            </Link>

            <Link to="/sorveterias">
               <div className="bloco">
                  <img className="blocoimg" src={sorveterias} alt="icon sorveterias" />
                  <h2 className="cat">Sorveterias</h2>
               </div>
            </Link>

            <Link to="/bares">
               <div className="bloco">
                  <img className="blocoimg" src={bares} alt="icon bares" />
                  <h2 className="cat">Bares</h2>
               </div>
            </Link>

            <Link to="/lojasconfeccoes">
               <div className="bloco">
                  <img className="blocoimg" src={lojasconfeccoes} alt="icon lojasconfeccoes" />
                  <h2 className="cat">Lojas de Confecções</h2>
               </div>
            </Link>

            <Link to="/lojasinformatica">
               <div className="bloco">
                  <img className="blocoimg" src={lojasinformatica} alt="icon lojasinformatica" />
                  <h2 className="cat">Lojas de Informática</h2>
               </div>
            </Link>

            <Link to="/postosabastecimento">
               <div className="bloco">
                  <img className="blocoimg" src={postosabastecimento} alt="icon postosabastecimento" />
                  <h2 className="cat">Postos de Abastecimento</h2>
               </div>
            </Link>

         </div>*/}
      </Container >
   );
}






