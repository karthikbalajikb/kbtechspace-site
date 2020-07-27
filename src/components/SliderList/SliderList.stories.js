import React from 'react'
import { action } from '@storybook/addon-actions'
import SliderList from './slider-list'

import { Flexbox } from '../../styles/styled'

export default {
  title: 'Design System/Atoms/SliderList',
  component: SliderList,
}

export const Slider = () => (
  <Flexbox flexDirection="column" width={1/2}>
    <SliderList text="Morzilla A-Frame" value="40" />
    <SliderList text="Vuforia" value="30" />
    <SliderList text="Google ARCore" value="20" />
    <SliderList text="Apple ARKit" value="20" />
  </Flexbox>
)
