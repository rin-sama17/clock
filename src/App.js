import './App.css';

import { Component } from 'react';

import Clock from './components/Clock';
import SecoundClock from './components/SecoundClock';

class App extends Component {
  constructor () {
    super();
    this.state = { date: new Date(), showClock: true, color: false };
    this.colorChange = this.colorChange.bind(this);
    this.clockChange = this.clockChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js - getDerivedStateFromProps()');
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.clock = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  clockChange() {
    this.setState({ showClock: !this.state.showClock });
  }
  colorChange() {
    this.setState({ color: !this.state.color });
  }

  componentWillUnmount() {
    console.log('App.js - componentWillUnmount()');
    clearInterval(this.timer);
  }
  render() {
    console.log('App.js - render');
    const { date, showClock, color } = this.state;

    return (

      <div className="App">

        <h3>سلام</h3>

        { showClock ? <SecoundClock date={ date } color={ color } /> : null }
        <hr />
        <button className='btn btn-light' onClick={ this.clockChange }>نمایش ساعت</button>
        <button className='btn btn-danger' onClick={ this.colorChange }>تغییر رنگ</button>
      </div>
    );
  }
}

export default App;
