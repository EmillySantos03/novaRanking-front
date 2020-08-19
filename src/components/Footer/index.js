import React from 'react';


import obelisco from "../../assets/obelisco.png"

import { Container } from './style';

export default function Menu() {

   return (

      <Container>
         <div className="content">
            <div className="logo">
               <img className="obelisco" src={obelisco} alt="logo" />
            </div>

            <section className="footerSection">
               <h3 className="direitos"> Todos os direitos reservados </h3>
            </section>
         </div>
      </Container>
   );
}