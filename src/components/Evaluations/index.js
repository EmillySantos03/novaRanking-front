import React from "react";
import { ContainerImg } from "./style.js";


export default function Evaluations(props) {
   return (
      <ContainerImg>
         <div className="bloco">
            <div className="titulo" key={props._id}>{props.name}</div>
            <div className="subtitulo">
               <div className="cat" key={props._id}>Funcionamento: {props.operation}</div>
               <div className="cat" key={props._id}>Endereço: {props.address}</div>
            </div>
            <img key={props._id} className="blocoimg" src={props.profileImg} alt="imagem das empresas" />

         </div>
         <div className="bloco-Avaliacoes">
            <div className="blocoAvaliacao">
               <div className="tituloAval" key={props._id}>Atendimento: {props.attendance}%</div>
               <img key={props._id} className="imgAttendance" src={props.imgAttendance} alt="imagem das Aval Attendance" />
               <div className="tituloAval" key={props._id}>{props.classAtendance}</div>
            </div>

            <div className="blocoAvaliacao">
               <div className="tituloAval" key={props._id}>Preço: {props.price}%</div>
               <img key={props._id} className="imgPrice" src={props.imgPrice} alt="imagem das Aval Price" />
               <div className="tituloAval" key={props._id}>{props.classPrice}</div>
            </div>

            <div className="blocoAvaliacao">
               <div className="tituloAval" key={props._id}>Organização: {props.organization}%</div>
               <img key={props._id} className="imgOrganization" src={props.imgOrganization} alt="imagem das Aval Organization" />
               <div className="tituloAval" key={props._id}>{props.classOrganization}</div>
            </div>

            <div className="blocoAvaliacao">
               <div className="tituloAval" key={props._id}>Localização: {props.place}%</div>
               <img key={props._id} className="imgPlace" src={props.imgPlace} alt="imagem das Aval Place" />
               <div className="tituloAval" key={props._id}>{props.classPlace}</div>
            </div>


         </div>
      </ContainerImg>
   );
}






























/*
   const [evaluation, setEvaluation] = useState({
      attendance: '',
      price: '',
      organization: '',
      place: '',
      user: '',
      business:''
   });

   async function handleSubmit(e) {
      e.preventDefault();

      try {
         await api.post('/evaluation', evaluation);

         // setUser({ name: '', email: '', password: '' });
         history.push('/');
      } catch (err) {
         console.log('response', err);
      }
   }
const [attendanceValue, attendanceInputProps] = useRadioButtons("attendance");
const [priceValue, priceInputProps] = useRadioButtons("price");
const [organizationValue, organizationInputProps] = useRadioButtons("organization");
const [placeValue, placeInputProps] = useRadioButtons("place");

function useRadioButtons(name) {

   const inputProps = {
      type: "radio"
   };

   return [attendance, inputProps];
}

async function handleSubmit(event) {
   event.preventDefault();
   try {
      await api.post("/evaluation", {
         attendance,
         price,
         organization,
         place
      });
   }
   catch (err) {
      alert("Erro ao cadastrar");
   }
}*/