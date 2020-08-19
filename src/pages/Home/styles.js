import styled from "styled-components";

export const Container = styled.div`
      .content {
        width: 80%;
        margin: 0 auto;
        margin-top: 10px;
        justify-content: center;
        align-content: center;   
        
      }

      .content > div {
        background-color: #fff;
        background: #fff;
      }
/*
      .content {
        background-color: blue;
        width: 80%;
        height: 700px;
        margin: 0 auto;
        display: grid;
        grid-template-rows: 20% 20% 20%;
        grid-template-columns: 300px 300px 300px;
        margin-top: 100px;
        grid-gap: 15px;
        justify-content: center;
        align-content: center;       
      }

      .content > div {
        background-color: #fff;
        background: #fff;
      }

*/
@media screen and (max-width: 580px) {
 .content{
		width:100%;
	}
}
`;