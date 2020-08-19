import React, { useState } from "react";
import { Container } from "./style.js";
import api from "../../services/api";
import { Link } from "react-router-dom";
export default function Cadastro({ history }) {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function handleSubmit(event) {
      event.preventDefault();
      try {
         await api.post("/users", {
            name,
            email,
            password
         });

         history.push("/login");
         alert("Usuário Cadastrado");

      } catch (err) {
         alert("Erro ao cadastrar");
      }
   }

   return (
      <Container>

         <div className="cont">

            <section className="login">
               <h1>Cadastrar Usuário</h1>

               <form onSubmit={handleSubmit}>

                  <input
                     className="txt"
                     type="text"
                     placeholder="Nome"
                     id="nome"
                     onChange={event => setName(event.target.value)}
                     required
                  />

                  <input
                     className="txt"
                     type="email"
                     placeholder="Email"
                     id="email"
                     onChange={event => setEmail(event.target.value)}
                     required
                  />

                  <input
                     className="txt"
                     type="password"
                     placeholder="Senha"
                     id="senha"
                     onChange={event => setPassword(event.target.value)}
                     required
                  />

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