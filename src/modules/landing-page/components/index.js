import React, {Component} from 'react';
import { Link } from 'react-router';
import GigabyteLogo from "../../../assets/img/gigabyte-logo-png-transparent.png";
import AmdLogo from "../../../assets/img/amd-logo-png-transparent.png";
import AsusROGLogo from "../../../assets/img/asus_rog_logo.png";
import AsRockLogo from "../../../assets/img/asrock_landing_page_logo.png";
import IntelLogo from "../../../assets/img/intel-logo-square-transparent.png";
import RazerLogo from "../../../assets/img/razer_logo_landing_page.png";

class LandingPage extends Component {

    render() {
        return (
            <main className="w-100 h-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul style={{backgroundColor: "white"}} className="list-group list-group-horizontal">
                                <li className="list-group-item">
                                    <small>Licitatii ce se termina astazi</small>
                                </li>
                                <li className="list-group-item">
                                    <small>Incepe sa vinzi prin gamers market</small>
                                </li>
                                <li className="list-group-item">
                                    <small>Placi grafice</small>
                                </li>
                                <li className="list-group-item">
                                    <small>Procesoare</small>
                                </li>
                                <li className="list-group-item">
                                    <small>Monitoare</small>
                                </li>
                                <li className="list-group-item">
                                    <small>Placi de baza</small>
                                </li>
                                <li className="list-group-item">
                                    <small>SSD-uri</small>
                                </li>
                                <li className="list-group-item">
                                    <small>Tastaturi</small>
                                </li>
                                <li className="list-group-item">
                                    <small>Moushi</small>
                                </li>
                            </ul>
                            <div className="jumbotron mt-1">
                                <div className="container">
                                    <h3>Componente high-end. </h3>
                                    <h1>Pentru gaming. Garantate si verificate.</h1>
                                    <hr/>
                                    <p>Peste 50.000 de oferte pentru componente de gaming adaugate in fiecare luna.
                                        Aproximativ 500.000 de vizitatori noi in fiecare luna.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 brand-container">
                            <img width="150" height="150" src={GigabyteLogo}/>
                            <small>Vezi licitatii</small>
                            <h4>Placi grafice</h4>
                        </div>
                        <div className="col-lg-2 brand-container">
                            <img width="150" height="150" src={AmdLogo}/>
                            <small>Vezi licitatii</small>
                            <h4>Procesoare</h4>
                        </div>
                        <div className="col-lg-2 brand-container">
                            <img width="150" height="150" src={AsusROGLogo}/>
                            <small>Vezi licitatii</small>
                            <h4>Monitoare</h4>
                        </div>
                        <div className="col-lg-2 brand-container">
                            <img width="150" height="150" src={AsRockLogo}/>
                            <small>Vezi licitatii</small>
                            <h4>Placi de baza</h4>
                        </div>
                        <div className="col-lg-2 brand-container">
                            <img width="150" height="150" src={IntelLogo}/>
                            <small>Vezi licitatii</small>
                            <h4>HDD/SSD-uri</h4>
                        </div>
                        <div className="col-lg-2 brand-container">
                          <Link to="hardware-offers/mouse">
                            <img width="150" height="150" src={RazerLogo}/>
                            <small>Vezi licitatii</small>
                            <h4>Tastaturi/Moushi</h4>
                          </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default LandingPage;
