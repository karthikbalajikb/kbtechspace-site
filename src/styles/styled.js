import styled from 'styled-components'
import { space as spacing, color, layout, flexbox } from 'styled-system'

export const Space = styled.div`
  margin-top: ${({ vertical, space }) => vertical && `${space}px`};
  margin-left: ${({ horizontal, space }) => horizontal && `${space}px`};
`

/**
 * Refer styled-system NPM doc for reference
 *
 * Below are supported properties
 *
 * flexbox -  https://styled-system.com/api/#flexbox .
 *    Ex: alignItems='center'
 *    alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection,
 *    flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, and order
 *
 * layout - https://styled-system.com/api/#layout .
 *    Ex: height={64}
 *    width, height, display, minWidth, minHeight, maxWidth, maxHeight, size,
 *    verticalAlign, overflow, overflowX, and overflowY
 *
 * space - https://styled-system.com/api/#space
 *    Ex: m={16}
 *
 * color - https://styled-system.com/api/#color
 *    Ex: backgroundColor='blue'
 * */
export const Flexbox = styled.div(
  {
    display: 'flex',
  },
  spacing,
  color,
  layout,
  flexbox
)

export const Anchor = styled.a``

export const Image = styled.img`
  margin-bottom: 0px;
`;
