import React, { Component } from 'react';

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
                      <p>Peste 50.000 de componente high-end pentru gaming adaugate in fiecare luna. Aproximativ 500.000 de vizitatori noi in fiecare luna</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </main>
    );
  }
}

export default LandingPage;
