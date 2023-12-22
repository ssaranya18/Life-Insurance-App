import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ChildInsurance from "./pages/Marketing";
import HealthInsurance from "./pages/Design";
import AccidentInsurance from "./pages/Development";
import TermInsurance from "./pages/Consult";
import Signup from "./pages/Signup";
import Login from "./pages/Login.js";



function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/childinsurance" component={ChildInsurance}></Route>
          <Route path="/accidental" component={AccidentInsurance}></Route>
          <Route path="/health" component={HealthInsurance}></Route>
          <Route path="/terminsurance" component={TermInsurance}></Route>
        </Switch>
      </BrowserRouter>
      
    </>
    
  );
}

export default App;