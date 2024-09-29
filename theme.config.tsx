import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const Logo = React.createElement('span', null, 'ROS-Ready')

const config: DocsThemeConfig = {
  project: {
    // link: 'https://github.com/shuding/nextra-docs-template',
  },
  logo: Logo,
  chat: {
    // link: 'https://twitter.com',
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: ' ',
  },
  feedback: {
    content: ' ', // This disables the feedback button
  },
  editLink: {
    text: ' ', // This makes the link text a space
  },
}

export default config