import React, { useState, useEffect } from "react";
import { Container } from "./style.js";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { userLocal } from '../../services/auth';

export default function RegisterBusiness({ history }) {

   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const [operation, setOperation] = useState("");
   const [profileImg, setProfileImg] = useState("");
   const [category, setCategory] = useState([]);

   const [list, setList] = useState([]);
   useEffect(() => {
      async function loadList() {
         const response = await api.get('/business');
         setList(response.data);
      }
      loadList();
   }, [list]);

   useEffect(() => {
      const populateCategories = async () => {
         const req = await api.get('/category');
         setCategory(req.data);
         const { _id } = await userLocal();
         setCategory({ user: _id });
      };
      populateCategories();
   }, []);

   async function handleSubmit(event) {
      event.preventDefault();
      try {
         await api.post("/empresa", {
            name,
            address,
            operation,
            category,
            profileImg
         });

         history.push("/empresa");
         alert("Empresa Cadastrada");

      } catch (err) {
         alert("Erro ao cadastrar");
      }
   }

   function handleInputChange(e) {
      const { type, value } = e.target;
      setCategory({
         ...category,
         [type]: value,
      });
   }

   return (
      <Container>
         <div className="cont">
            <section className="login">
               <h1>Cadastrar Empresa</h1>
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
                     type="text"
                     placeholder="Endereço"
                     id="endereco"
                     onChange={event => setAddress(event.target.value)}
                     required
                  />
                  <input
                     className="txt"
                     type="text"
                     placeholder="Funcionamento"
                     id="funcionamento"
                     onChange={event => setOperation(event.target.value)}
                     required
                  />
                  <label htmlFor="cat">Categoria:</label>
                  <select id="cat" name="cat" onChange={handleInputChange}>
                     {category &&
                        category.map(({ _id, type }) => (
                           <option key={_id} value={_id}>
                              {type}
                           </option>
                        ))}
                  </select>
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