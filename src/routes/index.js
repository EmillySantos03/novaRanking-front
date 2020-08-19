import React from 'react';
import Login from '../pages/Login/index';
import Register from '../pages/RegisterUsers/index';
import Home from "../pages/Home/index";
import Evaluation from "../pages/Evaluation/index";
import Ranking from "../pages/Ranking/index";
import Businesses from "../pages/Businesses/index";
import RegisterBusiness from "../pages/RegisterBusiness/index";
import RegisterCategory from "../pages/RegisterCategory/index";
import { BrowserRouter, Switch } from 'react-router-dom';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Route from './Route';

export default function Routes() {
   return (

      <BrowserRouter>
         <Switch>
            <Route path="/cadastro" component={Register} />
            <Route path="/login" component={Login} />
            <>
               <Menu />
               <Route exact path="/" component={Home} />
               <Route path="/cadastrar/categoria" component={RegisterCategory} />
               <Route path="/ranking" component={Ranking} />
               <Route path="/cadastrar/empresa" component={RegisterBusiness} />
               <Route path="/empresas" component={Businesses} />
               <Route path="/avaliacao" component={Evaluation} />
               <Footer />
            </>
            <>
            </>
         </Switch>
      </BrowserRouter>

   );
}