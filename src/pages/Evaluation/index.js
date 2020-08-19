import React, { useState, useEffect } from "react";
import { Container } from "./style.js";
import api from "../../services/api";
import Evaluations from "../../components/Evaluations";
import { Link } from 'react-router-dom';
import { userLocal } from '../../services/auth';
let resultAttendance;
let resultPrice;
let resultPlace;
let resultOrganization;
let imgAttendance;
let imgPrice;
let imgPlace;
let imgOrganization;
let classAttendance;
let classPrice;
let classPlace;
let classOrganization;
export default function Evaluation() {


   const [list, setList] = useState([]);
   const listaAttendance = [];
   const listaPrice = [];
   const listaPlace = [];
   const listaOrganization = [];
   useEffect(() => {
      async function loadList() {
         const url_atual = window.location.href;
         const id = url_atual.substring(32);
         const response = await api.get("/business/evaluation/" + id);
         setList(response.data);
      }
      loadList();

      async function loadLista() {
         let x = 0;
         list && list.map(z => (
            z.evaluation.map(a => {
               if (a.attendance == "bom") {
                  listaAttendance[x] = 60;

               }
               if (a.attendance == "excelente") {
                  listaAttendance[x] = 100;

               }
               if (a.attendance == "razoável") {
                  listaAttendance[x] = 40;
               }
               if (a.attendance == "precisa melhorar") {
                  listaAttendance[x] = 20;
               }
               if (a.attendance == "muito bom") {
                  listaAttendance[x] = 80;
               }

               if (a.price == "bom") {
                  listaPrice[x] = 60;

               }
               if (a.price == "excelente") {
                  listaPrice[x] = 100;

               }
               if (a.price == "razoável") {
                  listaPrice[x] = 40;
               }
               if (a.price == "precisa melhorar") {
                  listaPrice[x] = 20;
               }
               if (a.price == "muito bom") {
                  listaPrice[x] = 80;
               }
               if (a.place == "muito bom") {
                  listaPlace[x] = 80;

               }
               if (a.place == "bom") {
                  listaPlace[x] = 60;

               }
               if (a.place == "excelente") {
                  listaPlace[x] = 100;

               }
               if (a.place == "razoável") {
                  listaPlace[x] = 40;
               }
               if (a.place == "precisa melhorar") {
                  listaPlace[x] = 20;
               }
               if (a.organization == "razoável") {
                  listaOrganization[x] = 40;
               }
               if (a.organization == "precisa melhorar") {
                  listaOrganization[x] = 20;
               }
               if (a.organization == "muito bom") {
                  listaOrganization[x] = 80;
               }

               if (a.organization == "bom") {
                  listaOrganization[x] = 60;

               }
               if (a.organization == "excelente") {
                  listaOrganization[x] = 100;

               }
               if (a.organization == "razoável") {
                  listaOrganization[x] = 40;
               }
               if (a.organization == "precisa melhorar") {
                  listaOrganization[x] = 20;
               }
               if (a.organization == "muito bom") {
                  listaOrganization[x] = 80;
               }
               x++
            }

            )))
      }
      loadLista();
      let somaAttendance = 0;
      let contAttendance = 0;
      for (let i = 0; i < listaAttendance.length; i++) {
         somaAttendance = somaAttendance + listaAttendance[i];
         contAttendance = contAttendance + 1;

      }
      resultAttendance = somaAttendance / contAttendance;

      let somaPrice = 0;
      let contPrice = 0;
      for (let i = 0; i < listaPrice.length; i++) {
         somaPrice = somaPrice + listaPrice[i];
         contPrice = contPrice + 1;

      }
      resultPrice = somaPrice / contPrice;

      let somaPlace = 0;
      let contPlace = 0;
      for (let i = 0; i < listaPlace.length; i++) {
         somaPlace = somaPlace + listaPlace[i];
         contPlace = contPlace + 1;

      }
      resultPlace = somaPlace / contPlace;

      let somaOrganization = 0;
      let contOrganization = 0;
      for (let i = 0; i < listaOrganization.length; i++) {
         somaOrganization = somaOrganization + listaOrganization[i];
         contOrganization = contOrganization + 1;

      }
      resultOrganization = somaOrganization / contOrganization;


      if ((resultAttendance >= 60) && (resultAttendance < 80)) {
         imgAttendance = "https://image.flaticon.com/icons/svg/396/396488.svg";
      }
      if (resultAttendance == 100) {
         imgAttendance = "https://image.flaticon.com/icons/svg/396/396929.svg";
      }
      if (resultAttendance >= 80 && resultAttendance < 100) {
         imgAttendance = "https://image.flaticon.com/icons/svg/396/396485.svg";
      }
      if (resultAttendance >= 40 && resultAttendance < 60) {
         imgAttendance = "https://image.flaticon.com/icons/svg/397/397080.svg";
      }
      if (resultAttendance >= 20 && resultAttendance < 40) {
         imgAttendance = "https://image.flaticon.com/icons/svg/397/397113.svg";
      }


      if (resultPrice >= 60 && resultPrice < 80) {
         imgPrice = "https://image.flaticon.com/icons/svg/396/396488.svg";
      }
      if (resultPrice == 100) {
         imgPrice = "https://image.flaticon.com/icons/svg/396/396929.svg";
      }
      if (resultPrice >= 80 && resultPrice < 100) {
         imgPrice = "https://image.flaticon.com/icons/svg/396/396485.svg";
      }
      if (resultPrice >= 40 && resultPrice < 60) {
         imgPrice = "https://image.flaticon.com/icons/svg/397/397080.svg";
      }
      if (resultPrice >= 20 && resultPrice < 40) {
         imgPrice = "https://image.flaticon.com/icons/svg/397/397113.svg";

      }

      if (resultPlace >= 60 && resultPlace < 80) {
         imgPlace = "https://image.flaticon.com/icons/svg/396/396488.svg";
      }
      if (resultPlace == 100) {
         imgPlace = "https://image.flaticon.com/icons/svg/396/396929.svg";
      }
      if (resultPlace >= 80 && resultPlace < 100) {
         imgPlace = "https://image.flaticon.com/icons/svg/396/396485.svg";
      }
      if (resultPlace >= 40 && resultPlace < 60) {
         imgPlace = "https://image.flaticon.com/icons/svg/397/397080.svg";
      }
      if (resultPlace >= 20 && resultPlace < 40) {
         imgPlace = "https://image.flaticon.com/icons/svg/397/397113.svg";

      }


      if (resultOrganization >= 60 && resultOrganization < 80) {
         imgOrganization = "https://image.flaticon.com/icons/svg/396/396488.svg";
      }
      if (resultOrganization == 100) {
         imgOrganization = "https://image.flaticon.com/icons/svg/396/396929.svg";
      }
      if (resultOrganization >= 80 && resultOrganization < 100) {
         imgOrganization = "https://image.flaticon.com/icons/svg/396/396485.svg";
      }
      if (resultOrganization >= 40 && resultOrganization < 60) {
         imgOrganization = "https://image.flaticon.com/icons/svg/397/397080.svg";
      }
      if (resultOrganization >= 20 && resultOrganization < 40) {
         imgOrganization = "https://image.flaticon.com/icons/svg/397/397113.svg";
      }

   }, [list], [listaAttendance], [listaPrice], [listaPlace], [listaOrganization]);
   // useEfect

   //const [business, setBusiness] 



   const [attendance, setAttendance] = useState("");
   const [price, setPrice] = useState("");
   const [organization, setOrganization] = useState("");
   const [place, setPlace] = useState("");
   const [lista, setLista] = useState([]);
   const [resposta, setResposta] = useState("");
   async function handleSubmit(event) {
      event.preventDefault();
      try {
         let user = userLocal();
         const url_atual = window.location.href;
         const id = url_atual.substring(32);
         const response = await api.get("/business/evaluation/" + id);
         setLista(response.data);
         if (lista.evaluation = []) {
            const url_atual = window.location.href;
            const business = url_atual.substring(32);
            await api.post("/evaluation", {
               attendance,
               price,
               organization,
               place,
               user,
               business
            });
            setResposta("Avaliação Cadastrada!");
         }
      }
      catch (err) {
         alert("Erro ao cadastrar");
      }
   }


   return (
      <Container>

         <div className="content-emp">
            {list &&
               list.map(z => (
                  < Evaluations
                     _id={z._id}
                     name={z.name}
                     operation={z.operation}
                     address={z.address}
                     profileImg={z.profileImg}
                     attendance={Math.round(resultAttendance)}
                     imgAttendance={imgAttendance}
                     price={Math.round(resultPrice)}
                     imgPrice={imgPrice}
                     organization={Math.round(resultOrganization)}
                     imgOrganization={imgOrganization}
                     place={Math.round(resultPlace)}
                     imgPlace={imgPlace}
                  />
               ))}


            <section className="evaluation">
               <h1>Avalie você também</h1>
               <form onSubmit={handleSubmit}>
                  <legend>Como você avalia o atendimento?</legend>
                  <input
                     name="opcao"
                     value="excelente"
                     type="radio"
                     onChange={event => setAttendance(event.target.value)}
                  />
                  <label htmlFor="excelente">Excelente</label>
                  <input
                     name="opcao"
                     value="muito bom"
                     onChange={event => setAttendance(event.target.value)}
                     type="radio"
                  />
                  <label htmlFor="muitobom">Muito bom</label>
                  <input
                     name="opcao"
                     value="bom"
                     onChange={event => setAttendance(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="bom">Bom</label>
                  <input
                     name="opcao"
                     value="razoável"
                     onChange={event => setAttendance(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="razoavel">Razoável</label>
                  <input
                     name="opcao"
                     value="precisa melhorar"
                     onChange={event => setAttendance(event.target.value)}
                     type="radio"
                  />
                  <label htmlFor="razoavel">Precisa Melhorar</label>
                  <legend>Como você avalia o preço?</legend>

                  <input
                     name="opcao2"
                     value="excelente"
                     type="radio"
                     onChange={event => setPrice(event.target.value)}
                  />
                  <label htmlFor="excelente">Excelente</label>
                  <input
                     name="opcao2"
                     value="muito bom"
                     onChange={event => setPrice(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="muitobom">Muito bom</label>
                  <input
                     name="opcao2"
                     value="bom"
                     onChange={event => setPrice(event.target.value)}
                     type="radio"
                  />
                  <label htmlFor="bom">Bom</label>
                  <input
                     name="opcao2"
                     value="razoável"
                     onChange={event => setPrice(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="razoavel">Razoável</label>
                  <input
                     name="opcao2"
                     value="precisa melhorar"
                     onChange={event => setPrice(event.target.value)}
                     type="radio"
                  />
                  <label htmlFor="razoavel">Precisa Melhorar</label>
                  <legend>Como você avalia o visual?</legend>
                  <input
                     name="opcao3"
                     value="excelente"
                     type="radio"
                     onChange={event => setOrganization(event.target.value)}
                  />
                  <label htmlFor="excelente">Excelente</label>
                  <input
                     name="opcao3"
                     value="muito bom"
                     onChange={event => setOrganization(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="muitobom">Muito bom</label>
                  <input
                     name="opcao3"
                     value="bom"
                     onChange={event => setOrganization(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="bom">Bom</label>
                  <input
                     name="opcao3"
                     value="razoável"
                     onChange={event => setOrganization(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="razoavel">Razoável</label>
                  <input
                     name="opcao3"
                     value="precisa melhorar"
                     onChange={event => setOrganization(event.target.value)}
                     type="radio"
                  />
                  <label htmlFor="razoavel">Precisa Melhorar</label>
                  <legend>Como você avalia a localização?</legend>
                  <input
                     name="opcao4"
                     value="excelente"
                     type="radio"
                     onChange={event => setPlace(event.target.value)}
                  />
                  <label htmlFor="excelente">Excelente</label>
                  <input
                     name="opcao4"
                     value="muito bom"
                     onChange={event => setPlace(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="muitobom">Muito bom</label>
                  <input
                     name="opcao4"
                     value="bom"
                     onChange={event => setPlace(event.target.value)}
                     type="radio"
                  />
                  <label htmlFor="bom">Bom</label>
                  <input
                     name="opcao4"
                     value="razoável"
                     onChange={event => setPlace(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="razoavel">Razoável</label>
                  <input
                     name="opcao4"
                     value="precisa melhorar"
                     onChange={event => setPlace(event.target.value)}
                     type="radio"

                  />
                  <label htmlFor="razoavel">Precisa Melhorar</label>
                  <div className="divBtn">
                     <button className="btn" type="submit">Salvar</button><br />
                  </div>
                  <hr className="voltar" />
                  <Link className="link" to="../">
                     Voltar{" "}
                  </Link>
               </form>
            </section>
         </div>
      </Container >
   );
}