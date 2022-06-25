import { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    console.log('Clock.jsx - constractor')
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Clock.jsx - getDerivedStateFromProps')
    return state
  }

  render() {
    console.log('Clock.jsx - render')
    const { date, color } = this.props
    const style = {
      color: color ? 'tomato' : 'black',
    }

    return (
      <>
        <p style={style}>ساعت : {date.toLocaleTimeString()}</p>
      </>
    )
  }
}

export default Clock
