import React from "react";
import { isNumber } from "util";
import { formatDigit } from "../timer/Timer";
import "./BinaryRepresentation.scss";
import store from "../../redux/store/store";

function toBinaryRepresentation(time) {
  return formatDigit(Number(time).toString(2), 5).split("");
}

class BinaryRepresentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      representation: isNumber(props.time)
        ? toBinaryRepresentation(props.time)
        : toBinaryRepresentation(60)
    };

    this.unsubscribe = store.subscribe(() => {
      this.onTimeChange(store.getState().time);
    });
  }

  componenWillUnmount() {
    this.unsubscribe();
  }

  onTimeChange(time) {
    this.setState({
      representation: toBinaryRepresentation(time)
    });
  }

  render() {
    return (
      <div className="binary-representation-container">
        {this.state.representation.map((digit, index) => {
          if (digit === "1") {
            return <div key={index} className="digit active" />;
          } else {
            return <div key={index} className="digit" />;
          }
        })}
      </div>
    );
  }
}

export default BinaryRepresentation;
