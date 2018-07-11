import React from 'react'
import './text-typing.scss'

function* letterGen(letter) {
  yield* letter;
  // yield 'I'
  // yield ' am'
  // yield ' blogger'
  // yield ' .'
}

class TextTyping extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: ' ' }
  }

  componentDidMount() {
    let test = 'I am a blogger'
    this.handleTyping(test)
  }

  handleTyping = letter => {
    let letterArr = letter.split('');
    console.log(letterArr)
    let iter = letterGen(letterArr)
    // for(let it of iter) {
    //   // console.log(iter.next().done)
    //   let l = it
    let timer = setInterval(() => {
      let l = iter.next()
      if(l.done !== true){
      this.setState({ text: this.state.text + l.value })
      }
      else{
      this.setState({text: ''});
      clearInterval(timer);
      this.handleTyping(letter)
      }
    }, 250)
    // }
  }

  render() {
    return <p className="kbts-name-card-text-3">{this.state.text}</p>
  }
}

export default TextTyping
