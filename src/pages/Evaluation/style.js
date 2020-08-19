import styled from "styled-components";

export const Container = styled.div`

  .evaluation{
     width:60%;
     height:400px;
     margin:0 auto;
        z-index: -1;
        -webkit-box-shadow: 0px 0px 8px 2px #e0e0e0;
        -moz-box-shadow: 0px 0px 8px 2px #e0e0e0;
        box-shadow: 0px 0px 8px 2px #e0e0e0;
  }
  h1{
     width:100%;
     font-size:25px;
     text-align:center;
  }
  legend{
     margin-left:2%;
     margin-top:15px;
     margin-bottom:15px;
  }
  input, label{
     padding-right: 5%;
      margin-left: 1%;
  }
  .divBtn{
     margin: 25px 0px 5px 0px;
     width:100%;
     text-align: center;
  }
  .btn{
       cursor: pointer;
    color: #fff;
     width: 30%;
     height: 30px;
   padding: 5px 1%;
    border-radius: 6px;
    border: 0;
    background-color: #7159c1;
    font-size: 14px;
  }
  a{ 
     margin-left: 20%;
     color: #2E2E2E;
  }
  @media screen and (max-width: 600px) {
 .content-emp{
		width:100%;
	}
    .evaluation{
     width:100%;
     height:400px;
  }
  input, label{
     font-size:13px;
     padding-right: 2%;
      margin-left: 1%;
  }
  }
   @media screen and (min-width: 600px) and (max-width: 800px) {
   .content-emp{
		width:100%;
	}
   .evaluation{
     width:80%;
     height:500px;
  }
   input, label{
     font-size:16px;
     padding-right: 2%;
      margin-left: 1%;
  }
   }
     @media screen and (min-width: 800px) and (max-width: 1350px) {
   .content-emp{
		width:100%;
	}
   .evaluation{
     width:80%;
     height:500px;
  }
   input, label{
     font-size:16px;
     padding-right: 2%;
      margin-left: 1%;
  }
   }
`;