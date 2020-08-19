import styled from "styled-components";

export const ContainerImg = styled.div`

      .bloco{
         height: 300px;
         width: 60%;
         margin: 0 auto;
         margin-bottom:30px;
        z-index: -1;
        -webkit-box-shadow: 0px 0px 8px 2px #e0e0e0;
        -moz-box-shadow: 0px 0px 8px 2px #e0e0e0;
        box-shadow: 0px 0px 8px 2px #e0e0e0;
      }

     .blocoimg{
      width:35%;
      float:left;
      height: 200px;
      margin:25px;
      }

      .cat {
        font-size: 20px;
        margin-bottom:10px;
        color: black;
         cursor:pointer;
      }
      .titulo{
        padding-top:15px;
        font-size: 24px;
        font-weight: bold;
        width:100%;
        text-align: center;
        color: black;
      }
      .subtitulo{
        margin-top:70px;
        width:50%;
        float: right;
      }
     .blocoAvaliacao{
       z-index: -1;
        -webkit-box-shadow: 0px 0px 8px 2px #e0e0e0;
        -moz-box-shadow: 0px 0px 8px 2px #e0e0e0;
        box-shadow: 0px 0px 8px 2px #e0e0e0;
       width:20%;
       margin: 20px;
       margin-top:20px;
       float:left;
       height:100px;
       
     }
     .tituloAval{
        font-size: 20px;
        font-weight: bold;
        width:100%;
        text-align: center;
        color: black;
        
     }
     .imgAttendance, .imgPrice, .imgPlace, .imgOrganization{
       width:40%;
       height:40%;
       margin-top:10px;
       margin-left:20%;
     }
     .bloco-Avaliacoes{
        height: 140px;
         width: 60%;
         margin: 0 auto;
         margin-bottom:30px;
        z-index: -1;
        -webkit-box-shadow: 0px 0px 8px 2px #e0e0e0;
        -moz-box-shadow: 0px 0px 8px 2px #e0e0e0;
        box-shadow: 0px 0px 8px 2px #e0e0e0;
     }


     @media screen and (max-width: 600px) {
	.bloco {

    height:300px;
		width:100%;
    margin:10px;
	}
  .blocoimg{
      width:39%;
      margin-left:5%;
      height: 200px;
      }
   .cat {
        font-size: 14px;
        margin-right:10%;
        color: black;
        cursor:pointer;
   }
   .bloco-Avaliacoes{
         width: 100%;
     }
     .blocoAvaliacao{
       width:20%;
       margin: 10px;
       margin-top:20px;
       float:left;
       
     }
      .tituloAval{
        font-size: 10px;
        font-weight: bold;
        width:100%;
        text-align: center;
        color: black;
        
     }
     

    
}
@media screen and (min-width: 600px) and (max-width: 1350px) {
.bloco {

    height:300px;
		width:100%;
    margin:10px;
	}
  .blocoimg{
      width:210px;
      margin-left:10%;
      height: 200px;
      }
   .cat {
        font-size: 14px;
        margin-right:10%;
        color: black;
        cursor:pointer;
   }
   .bloco-Avaliacoes{
         width: 100%;
     }
     .blocoAvaliacao{
       width:20%;
       margin: 2%;
       margin-top:20px;
       float:left;
       
     }
     .tituloAval{
        font-size: 14px;
        font-weight: bold;
        width:80%;
        text-align: center;
        color: black;
        
     }
   
}
`;