import React from 'react'
import styled from 'styled-components'

const StatsCard = ({ name, count }) => (
  <Container>
    <Stats>{count}</Stats>
    <StatsLabel>{name}</StatsLabel>
  </Container>
)

export default StatsCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 140px;
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};
  background-color: ${({ theme }) => `${theme.surface.main}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.default}`};
`

const Stats = styled.div`
  font-size: 48px;
  font-weight: 300;
  color: ${({ theme }) => `${theme.secondary.main}`};
`

const StatsLabel = styled.div`
  font-size: 15px;
  color:  ${({ theme }) => `${theme.grayScale[600]}`};
`
