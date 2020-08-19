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
      height: 120px;
      margin: 2% 26% 26% 20%;
      }
      .name{
        height: 150px;
        
      }
      .cat {
        font-size: 24px;
        color: black;
         cursor:pointer;
      }
      @media screen and (max-width: 800px) {
	.bloco {

    height:200px;
		width:48%;
	}
  .blocoimg{
     margin: 0px 26% 26% 20%;
      width:50%;
      height: 70px;

      }
   .cat {
        font-size: 14px;
        color: black;
        cursor:pointer;
      }
        .name{
        height: 90px;
        
      }
}
`;