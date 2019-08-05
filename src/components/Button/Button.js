import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Button

const StyledButton = styled.button`
  border: none;
  outline: none;
  font-size: 13px;
  width: 120px;
  height: 37px;
  color: aliceblue;
  background-color: #1c262b;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 3px 14px 1px #87969a;

  :hover {
    background-color: #345;
    border-radius: 50px;
  }

  :active {
    border: 4px solid #8ba4be;
  }
`
