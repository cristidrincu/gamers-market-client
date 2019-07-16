import React, { Component } from 'react';
import NvidiaLogo from "../../../assets/img/nvidia_logo_landing_page.jpg";
import AmdLogo from "../../../assets/img/amd_logo_png_32281.png";
import BenqLogo from "../../../assets/img/benq_logo_landing_page.jpeg";
import AsRockLogo from "../../../assets/img/asrock_landing_page_logo.png";
import HyperXLogo from "../../../assets/img/hyperx_logo_landing_page.png";
import RazerLogo from "../../../assets/img/razer_logo_landing_page.png";

class LandingPage extends Component {

  render() {
    return(
        <main className="w-100 h-100">
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                  <ul style = {{backgroundColor: "white"}} className="list-group list-group-horizontal">
                    <li className="list-group-item"><small>Licitatii ce se termina astazi</small></li>
                    <li className="list-group-item"><small>Incepe sa vinzi prin gamers market</small></li>
                    <li className="list-group-item"><small>Placi grafice</small></li>
                    <li className="list-group-item"><small>Procesoare</small></li>
                    <li className="list-group-item"><small>Monitoare</small></li>
                    <li className="list-group-item"><small>Placi de baza</small></li>
                    <li className="list-group-item"><small>SSD-uri</small></li>
                    <li className="list-group-item"><small>Tastaturi</small></li>
                    <li className="list-group-item"><small>Moushi</small></li>
                  </ul>
                  <div className="jumbotron mt-1">
                    <div className="container">
                      <h3>Componente high-end. </h3>
                      <h1>Pentru gaming. Garantate si verificate.</h1>
                      <hr/>
                      <p>Peste 50.000 de oferte pentru componente de gaming adaugate in fiecare luna. Aproximativ 500.000 de vizitatori noi in fiecare luna.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="container">
            <div className="row">
                <div className="col-lg-2">
                  <img src={NvidiaLogo}/>
                  <p>Placi grafice</p>
                </div>
                <div className="col-lg-2">
                  <img width="200" height="200" src={AmdLogo} />
                  <p>Procesoare</p>
                </div>
                <div className="col-lg-2">
                  <img width="190" height="190" src={BenqLogo} />
                  <p>Monitoare</p>
                </div>
                <div className="col-lg-2">
                  <img width="190" height="190" src={AsRockLogo} />
                  <p>Placi de baza</p>
                </div>
                <div className="col-lg-2">
                  <img width="190" height="190" src={HyperXLogo} />
                  <p>SSD-uri</p>
                </div>
              <div className="col-lg-2">
                <img width="190" height="190" src={RazerLogo} />
                <p>Tastaturi</p>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default LandingPage;
