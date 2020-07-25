import React from 'react'
import styled from 'styled-components'

import './text-typing.scss'

class TextTyping extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: ' ' }
    // this.timer;
  }

  componentDidMount() {
    this.handleTyping(this.props.text_3)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleTyping = letter => {
    let letterArr = letter.split('')
    let iter = letterArr[Symbol.iterator]()

    this.timer = setInterval(() => {
      let l = iter.next()
      if (l.done !== true) {
        this.setState({ text: this.state.text + l.value })
      } else {
        // this.setState({ text: '' })
        clearInterval(this.timer)
        // this.handleTyping(letter)
      }
    }, 100)
  }

  render() {
    return (
      <StyledCodeText>
        {`console.log(' `}
        <p className="kbts-name-card-text-3">{this.state.text}</p>
        {` ')`}
      </StyledCodeText>
    )
  }
}

export default TextTyping

const StyledCodeText = styled.code`
  font-size: 1rem;
  grid-column: span 2;
  grid-row: 2;
  justify-self: center;
  align-self: end;
  margin-bottom: 15px;
  color: ${({ theme }) => `${theme.secondary.main}`};
  @media(max-width: 760px) {
    display: none;
  }
`
