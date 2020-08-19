import styled from "styled-components";

export const Container = styled.div`

.menuHeader{   
  height: 80px;
  background: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 4px -2px #e0e0e0;
  -moz-box-shadow: 0 4px 4px -2px #e0e0e0;
  -webkit-box-shadow: 0 4px 4px -2px #e0e0e0;
  position: relative;
}

.menuSection{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 40%;
      margin-left: 250px;
      margin-top: -40px;

}

.txtOp{
   color: #484848;
   margin-right: 20px;
   cursor:pointer;
}

.logo{
   width: 10%;
   margin-top: -15px;
   border: none;
   margin-left: 100px;
}

.obelisco{
   margin-left: 50px;
   margin-top: -50px;
   height: 50px;
   width: 50px;
}

.menuSignIn{
   cursor: pointer;
   margin-left: 1100px;
   margin-top: -30px;
   width: 8%;
}

.btnSignIn{
   cursor: pointer;
    color: #fff;
    background-color:#7159c1;
    height: 40px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    width: 100%;
   border:none;
}

.txtOp:hover {
  color: #7159c1;
}

.txtLogo{
   margin-top: 20px;
   margin-left: 10px;
   margin-bottom: 3px;
}

legend{
   width: 50%;
   height: 20px;
   margin: 0 auto;
   margin-top: 10px;
}

/*.pesquisa{
   margin-top: -30px;
   margin-left: 1000px;
   width: 40px;
   cursor: pointer;
}*/
@media screen and (max-width: 600px) {
   
.logo{
   margin-left: 20px;
}
.menuSignIn{
   cursor: pointer;
   margin-left: 380px;
   margin-top: -30px;
   width: 17%;
}
.menuSection{
      margin-left: 220px;

}

}
@media screen and (min-width: 600px) and (max-width: 1200px) {
   
.logo{
   margin-left: 10%;
}
.menuSection{
      margin-left: 50%;

}
.menuSignIn{
   cursor: pointer;
   margin-left: 80%;
   margin-top: -30px;
   width: 17%;
}
}





`;