import styled from "styled-components";

export const ContainerImg = styled.div`

      .bloco{
         height: 300px;
         width: 31.2%;
         margin: 1%;
         float: left;
        text-align: center;
        z-index: -1;
        -webkit-box-shadow: 0px 0px 8px 2px #e0e0e0;
        -moz-box-shadow: 0px 0px 8px 2px #e0e0e0;
        box-shadow: 0px 0px 8px 2px #e0e0e0;
      }

     .blocoimg{
      width:60%;
      height: 100px;
      margin: 60px;
      }

      .cat {
        font-size: 24px;
        color: black;
         cursor:pointer;
      }
/*
      .bloco{
         height: 300px;
         
        text-align: center;
        z-index: -1;
        -webkit-box-shadow: 0px 0px 8px 2px #e0e0e0;
        -moz-box-shadow: 0px 0px 8px 2px #e0e0e0;
        box-shadow: 0px 0px 8px 2px #e0e0e0;
      }

     .blocoimg{
      width:40%;
      margin-top:25px;
      
      }

      .cat {
        font-size: 24px;
        color: black;
        margin-top: 15px;
         cursor:pointer;
      }


*/
@media screen and (max-width: 900px) {
	.bloco {

    height:200px;
		width:48%;
	}
  .blocoimg{
      width:50%;
      height: 70px;
      margin-left:20px;
      margin-right:20px;
      margin-top:50px;
      margin-bottom:0px;
      }
   .cat {
        font-size: 14px;
        color: black;
        cursor:pointer;
      }
}
`;