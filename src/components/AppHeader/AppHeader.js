import React, { useState } from 'react'
import styled from 'styled-components'

// components
import Button from '../Button'
import SideMenuHeader from '../side-menu/side-menu-header'
import MenuOverlay from '../MenuOverlay'

// hooks
import useMediaQuery from '../../hooks/useMediaQuery'

// styles
import { Flexbox, Space, Image } from '../../styles/styled'

//assets
import moonSVG from '../../../assets/icons/moon.svg'
import sunSVG from '../../../assets/icons/sun.svg'
import burgerMenuSVG from '../../../assets/icons/menu.svg'
import closeSVG from '../../../assets/icons/close.svg'

const AppHeader = ({ logo, pathname, theme, onSwitchTheme }) => {
  const { isMobile } = useMediaQuery()
  const [showModal, setShowModal] = useState(false)

  return (
    <Header isMobile={isMobile}>
      {/* logo to be shown in mobile view */}
      {isMobile && <SideMenuHeader logo={logo} />}
      <Flexbox alignItems="center" justifyContent="flex-end">
        {/* theme switcher */}
        <Button
          width="50px"
          height="50px"
          label={
            <Image
              src={theme === 'light' ? moonSVG : sunSVG}
              width="30px"
              height="30px"
              alt="theme-switch"
            />
          }
          onClick={onSwitchTheme}
        />
        <Space horizontal space={20} />
        {/* hamburger menu for mobile view */}
        {isMobile && (
          <Button
            width="50px"
            height="50px"
            label={
              <Image
                src={showModal ? closeSVG : burgerMenuSVG}
                width="24px"
                height="24px"
                alt="theme-switch"
              />
            }
            onClick={() => setShowModal(!showModal)}
          />
        )}
      </Flexbox>
      <MenuOverlay
        showModal={showModal}
        pathname={pathname}
        theme={theme}
        setShowModal={setShowModal}
      />
    </Header>
  )
}

export default AppHeader

const Header = styled.header`
  display: grid;
  grid-template-columns: ${({ isMobile }) => (isMobile ? '1fr 1fr' : '1fr')};
  padding: 14px 20px;
`
