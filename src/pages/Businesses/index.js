import React, { useState, useEffect } from "react";
import { Container } from "./style.js";
import Businesses from "../../components/Businesses";
import api from "../../services/api";

export default function Business() {
   const [list, setList] = useState([]);
   useEffect(() => {
      async function loadList() {
         const url_atual = window.location.href;
         const id = url_atual.substring(31);
         const response = await api.get("/business/" + id);
         setList(response.data);
      }
      loadList();
   }, [list]);


   return (

      <Container>
         <div className="content">
            {list &&
               list.map(l => (
                  <Businesses
                     _id={l._id}
                     name={l.name}
                     operation={l.operation}
                     address={l.address}
                     profileImg={l.profileImg}
                  />
               ))}
         </div>
      </Container >
   );
}






