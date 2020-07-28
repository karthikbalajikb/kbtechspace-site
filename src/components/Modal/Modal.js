import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

// utils
import { APP_HEADER_HEIGHT } from '../../utils/constants';

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  if (open) {
    return createPortal(
      <Container>
        <Children>{children}</Children>
      </Container>,
      document.body
    );
  }
};

export default Modal;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  background-color: ${({ theme }) => `${theme.surface.main}`};
  height: 100%;
  width: 100%;
  top: ${APP_HEADER_HEIGHT}px;
  left: 0;
`;

const Children = styled.div`
  height: inherit;
  width: inherit;
`;