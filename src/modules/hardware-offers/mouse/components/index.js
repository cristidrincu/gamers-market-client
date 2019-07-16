import React, {Component} from 'react';
import { loadHardwareOffersMouse} from '../actions';

class HardwareOfferMouse extends Component {

  componentWillMount() {
    this.props.dispatch(loadHardwareOffersMouse());
  }

  render() {
    return(
        <main className="w-100 h-100">
          <div>
            <p>Hello from mouse hardware offers</p>
          </div>
        </main>
    )
  }
}

export default HardwareOfferMouse;