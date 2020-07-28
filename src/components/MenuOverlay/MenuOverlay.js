import React from 'react'

import Modal from '../Modal'
import SideMenuContent from '../side-menu/side-menu-content'

const MenuOverlay = ({ showModal, setShowModal, pathname, theme }) => (
  <Modal open={showModal} onClose={() => setShowModal(!showModal)}>
    <SideMenuContent
      defaultpath={pathname}
      theme={theme}
    />
  </Modal>
)

export default MenuOverlay
