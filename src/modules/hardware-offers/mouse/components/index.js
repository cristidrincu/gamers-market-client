import React, {Component} from "react";
import axios from "axios";

import FilterHardwareItems from "../../../../components/forms/filter-hardware-items";
import HardwareItemBasic from "../../../../components/hardware-items/hardware-item-basic";

class HardwareOfferMouse extends Component {

  constructor() {
    super();
    this.state = {
      hardwareOffersMouse: []
    }
  }

  componentDidMount() {
    return axios.get("/hardware-offers").then(response => {
      this.setState({hardwareOffersMouse: response.data.hardwareOffers});
    });
  }

  static getHardwareOffersMouse(formValues = {}) {
    console.log(formValues);
  }

  renderMice(hardwareOffersMouse) {
    return hardwareOffersMouse.map((hardwareOfferMouse, key) => {
      const { hardwareItem, sellingGamer } = hardwareOfferMouse;
      return <HardwareItemBasic key={key} hardwareItem={ hardwareItem } sellingGamer = { sellingGamer } />
    })
  }

  render() {
    // console.log(this.state.hardwareOffersMouse);
    return (
        <main className="w-100 h-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <small>
                  {this.state.hardwareOffersMouse.length} {this.state.hardwareOffersMouse.length > 1 ? "oferte " : "oferta "}
                  {this.state.hardwareOffersMouse.length > 1 ? "de moushi" : "de mouse"} pentru care se liciteaza
                </small>
                <hr/>
                <FilterHardwareItems htmlFor="mouseModel"
                                     fieldName="mouseModel"
                                     id="mouseModel"
                                     component="select"
                                     placeholder="Alege un model de mouse"
                                     label="Model mouse"
                                     fnToExecute={HardwareOfferMouse.getHardwareOffersMouse}/>
              </div>
              <div className="col-lg-8">
                {this.renderMice(this.state.hardwareOffersMouse)}
              </div>
            </div>
          </div>
        </main>
    )
  }
}

export default HardwareOfferMouse;