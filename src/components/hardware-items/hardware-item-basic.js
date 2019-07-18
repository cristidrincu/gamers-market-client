import React, {Component} from "react";
import PropTypes from "prop-types";

class HardwareItemBasic extends Component {

  render() {
    return (
        <div className="container"
             style={{marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid grey"}}>
          <div className="row">
            <div className="col-lg-8">
              <h4 style={{marginBottom: "0"}}>{this.props.hardwareItem.name}</h4>
              <small>Cod producator: {this.props.hardwareItem.manufacturerCode}</small>
              <div>
                <h4 style={{marginTop: "15px"}}>Descriere produs</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus nunc ante, efficitur quis diam bibendum, rutrum aliquam enim.
                  Pellentesque dictum auctor aliquet. Cras bibendum, eros vel sagittis tempus, ipsum nisi lobortis quam,
                  id aliquam sapien lectus a ligula.
                </p>
                <div className="row">
                  <div className="col-lg-4">
                    <small>Licitatia se incheie in:</small>
                  </div>
                  <div className="col-lg-8">
                    <small>In acest moment, ultima oferta este de: 1100 ron</small>
                    <button className="btn-primary ml-2">Detalii</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <img src="" width="100" height="100"/>
            </div>
          </div>
        </div>
    );
  }
}

HardwareItemBasic.propTypes = {
  hardwareItem: PropTypes.object
};

export default HardwareItemBasic;