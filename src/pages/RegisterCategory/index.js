import React, { useState } from "react";
import { Container } from "./style.js";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function RegisterCategory() {

   const [type, setType] = useState("");
   const [profileImg, setProfileImg] = useState("");



   async function handleSubmit(event) {
      event.preventDefault();
      try {
         await api.post("/categoria", {
            type,
            profileImg
         });
         alert("Categoria Cadastrada");

      } catch (err) {
         alert("Erro ao cadastrar");
      }
   }

   return (
      <Container>
         <div className="cont">
            <section className="login">
               <h1>Cadastrar Categoria</h1>
               <form onSubmit={handleSubmit}>
                  <input
                     className="txt"
                     type="text"
                     placeholder="Nome"
                     id="type"
                     onChange={event => setType(event.target.value)}
                     required
                  />

                  <div className="img">
                     <form>
                        <div className="group">
                           <input
                              type="file"
                              id="imagem"
                              onChange={event => setProfileImg(event.target.value)}
                              required />
                        </div>
                     </form>
                  </div>
                  <div>
                     <button className="button" type="submit">Salvar</button><br />
                     <hr className="voltar" />
                     <Link className="link" to="../">
                        Voltar{" "}
                     </Link>
                  </div>
               </form>
            </section>
         </div>
      </Container>
   );
}