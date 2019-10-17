import React from "react";
import "./Timer.scss";
import store from "../../redux/store/store";
import { setTimeAction, startTimeAction } from "../../redux/actions/actions";

export function formatDigit(text, zeros) {
  let formatted = "0000";

  return (formatted + text.toString()).substr(-(zeros + 1));
}

const startState = {
  time: 60000,
  start: 0,
  isOn: false,
  hasEnded: false
};

const endState = {
  isOn: false,
  time: 0,
  hasEnded: true
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.setState({
      time: startState.time,
      start: Date.now()
    });

    store.dispatch(startTimeAction());

    clearInterval(this.timer);

    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    const newTime = startState.time - (Date.now() - this.state.start);
    if (this.timerEnded()) {
      this.setState(endState);
      clearInterval(this.timer);
    } else {
      this.setState({
        isOn: true,
        time: newTime
      });
    }

    store.dispatch(setTimeAction(newTime));
  }

  timerEnded() {
    return this.state.time <= 0;
  }

  stopTimer() {
    this.setState({
      time: startState.time,
      isOn: false
    });
    clearInterval(this.timer);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.setState({
      time: startState.time,
      isOn: false,
      hasEnded: false
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.hasEnded ? 
        <h2 className="time-up"> Time up! </h2>
         : 
        <h2>{formatDigit(Math.floor(this.state.time / 1000), 1)} : {formatDigit(this.state.time.toString().substr(-3), 2)}</h2>
        }

        {this.state.hasEnded ? null : !this.state.isOn ?
          <i className="fas fa-play icon start-icon" onClick={this.startTimer}/>
         :
          <i className="fas fa-stop icon stop-icon" onClick={this.stopTimer} />
        }
        <i
          className={
            this.state.hasEnded
              ? "fas fa-undo icon reset-icon"
              : "fas fa-undo icon reset-icon margin-left"
          }
          onClick={this.resetTimer}
        />
      </div>
    );
  }
}

export default Timer;
