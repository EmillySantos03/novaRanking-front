import React from 'react';

import { Link } from 'react-router-dom';

import obelisco from "../../assets/obelisco.png"
/*import search from "../../assets/search.svg"*/

import { Container } from './styles';

export default function Menu() {

   return (

      <Container>
         <header className="menuHeader">

            <div className="logo">
               <p className="txtLogo">Nova</p>
               <p>Ranking</p>
               <img className="obelisco" src={obelisco} alt="logo" />
            </div>

            <section className="menuSection">
               <Link to="/">
                  <label className="txtOp">Início </label>
               </Link>
            </section>

            {/* {<div className="pesquisa">
               <button >
                  <img className="btnPesquisa" src={search} alt="pesquisa" />
               </button>
             </div>}*/}

            <div className="menuSignIn">
               <Link to="/login">
                  <button className="btnSignIn" type="submit"><legend>Entrar</legend></button>
               </Link>
            </div>

         </header>
      </Container>
   );
}