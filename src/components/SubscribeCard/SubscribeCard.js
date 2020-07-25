import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from 'react-query'

import Button from '../Button'
import SayHelloCard from '../SayHelloCard'

import { Space, Flexbox, Image } from '../../styles/styled'
import subscribeCardSVG from '../../../assets/icons/subscribeCard.svg'

import useMediaQuery from '../../hooks/useMediaQuery'

const views = {
  SUBSCRIBE_CARD: 'SUBSCRIBE_CARD',
  SAY_HELLO: 'SAY_HELLO',
}

const SubscribeCard = () => {
  const [email, setEmail] = useState('')
  const [view, setView] = useState(views.SUBSCRIBE_CARD)
  const { isMobile } = useMediaQuery()

  const [
    addNewSubscriber,
    { status, isIdle, isLoading, isSuccess, isError, data, error, reset },
  ] = useMutation(
    async () => {
      await fetch(
        `https://us-central1-kbtechspace-8907.cloudfunctions.net/addSubscriber?email=${email}&tag=blog`
      )
    },
    {
      onSuccess: data => {
        setView(views.SAY_HELLO)
      },
      onError: err => {
        console.log('onError >>', err)
      },
    }
  )

  if (view === views.SUBSCRIBE_CARD) {
    return (
      <Container>
        <Image src={subscribeCardSVG} alt="subcride-card" />
        <Space horizontal space={50} />
        <Flexbox flexDirection="column" width={1}>
          <Header>Blogs straight to your inbox</Header>
          <SubText>Get access to functions when they're added.</SubText>
          <Flexbox mt={30} flexDirection={isMobile ? 'column' : 'none'}>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Space horizontal vertical={isMobile} space={20} />
            <Button label="Subscribe" onClick={addNewSubscriber} />
          </Flexbox>
        </Flexbox>
      </Container>
    )
  }

  if (view === views.SAY_HELLO) {
    return <SayHelloCard />
  }
}

export default SubscribeCard

const Container = styled.div`
  display: flex;
  box-shadow: ${({ theme }) => `${theme.boxShadow.md}`};
  background-color: ${({ theme }) => `${theme.surface.main}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.default}`};
  padding: 30px;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`

const Header = styled.div`
  font-size: 24px;
  color: ${({ theme }) => `${theme.onPrimary.dark}`};
`

const SubText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => `${theme.secondary.main}`};
`

const Input = styled.input`
  outline: none;
  border: none;
  background-color: ${({ theme }) => `${theme.surface.main}`};
  box-shadow: ${({ theme }) => `${theme.boxShadow.inner}`};
  border-radius: ${({ theme }) => `${theme.borderRadius.default}`};
  height: 37px;
  width: 70%;
  padding-left: 20px;
  color: #a9a9a9;
  font-size: 16px;
  @media (max-width: 760px) {
    width: 100%;
  }
`
