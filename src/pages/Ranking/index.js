import React, { useState, useEffect } from "react";
import { Container } from "./style.js";
import api from "../../services/api";
import Category from "../../components/Categories";

export default function Home({ history }) {

   const [categories, setCategories] = useState([]);
   useEffect(() => {
      async function loadCategories() {
         const response = await api.get("/empresa");
         setCategories(response.data);
      }
      loadCategories();
   }, [categories]);


   return (

      <Container>

         <div className="dados">
            <section>
               <table>
                  <tr>
                     <td></td>
                  </tr>
                  <tr>
                     <td></td>
                  </tr>
                  <tr>
                     <td></td>
                  </tr>
                  {categories &&
                     categories.map(category => (
                        <Category
                           category={category.category}
                        />
                     ))}
               </table>
            </section>
         </div>
      </Container>
   );
}











