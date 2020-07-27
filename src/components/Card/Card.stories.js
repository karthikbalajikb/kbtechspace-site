import React from 'react'
import { action } from '@storybook/addon-actions'
import Card from './Card'

import { Flexbox } from '../../styles/styled'

export default {
  title: 'Design System/Molecules/Card',
  component: Card,
}

export const BlogCard = () => (
    <Card
      id={1}
      origin="kb-techspace"
      authorImage="https://user-images.githubusercontent.com/8594076/84599095-29047080-ae8d-11ea-8df1-117ac518e36a.png"
      authorName="Karthik Balaji"
      title='Storybook Blog'
      thumbnail="https://user-images.githubusercontent.com/8594076/84599095-29047080-ae8d-11ea-8df1-117ac518e36a.png"
      publishedDate="2020-06-01"
      updatedDate="2020-06-01"
      link='https://kbtechspace.com/blog'
      tags={["css grid", "layout"]}
      slug="css-grid-how-i-made-use-of-it"
      readTime="3 min"
    />
);
