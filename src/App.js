import React, { Component } from 'react'
import './assets/styles.css'
import Cronometro from './assets/cronometro.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 0,
      botao: 'Vai'
    }
    this.timer = null
    this.Iniciar = this.Iniciar.bind(this)
    this.Zerar = this.Zerar.bind(this)
  }

  Iniciar() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
      this.state.botao = 'Vai'
    } else {
      this.timer = setInterval(() => {
        let state = this.state
        state.num += 0.1
        this.setState(state)
        this.state.botao = 'Pausar'
      }, 100)
    }
    this.setState(this.state)
  }

  Zerar() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }
    let state = this.state
    state.num = 0
    this.setState(this)
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={Cronometro} />
        <a className="crono">{this.state.num.toFixed(1)}</a>

        <div className="area-botao">
          <a onClick={this.Iniciar} className="botao">
            {this.state.botao}
          </a>
          <a onClick={this.Zerar} className="botao">
            Zerar
          </a>
        </div>
      </div>
    )
  }
}

export default App
