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
  height: 100px;
  background-color: white;
  box-shadow: 1px 0px 19px 5px #eef2f7;
  border-radius: 4px;
`

const Stats = styled.div`
  font-weight: 600;
`

const StatsLabel = styled.div`
  font-size: 14px;
  color: #a4a5a7;
`
