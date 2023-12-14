import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarComponent from './Components/NavbarComponent';
import HomeLogo from "./Components/HomeLogo";
import InformationComponent from "./Components/InformationComponent";
import InformationComponent2 from "./Components/InformationComponent2";
import Calculator from "./Components/Calculator";
import Customers from "./Components/Customers";
import FAQ from "./Components/FAQ";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <NavbarComponent/>
        <HomeLogo/>
        <InformationComponent/>
        <InformationComponent2/>
        <Calculator/>
          <Customers/>
          <FAQ/>
  </React.StrictMode>
);

reportWebVitals();
