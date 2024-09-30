import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const Logo = React.createElement('span', null, 'ROS-Ready')

const Footer = React.createElement('span', null, '© 2021 ROS-Ready')

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
  editLink: {
    text: ' ',
  },
  feedback: {
    content: ' ',
  },
}

export default config