import React from 'react'

type Props = {
 href: string
 icon: string
}

const SocialLink: React.FC<Props> = ({ href, icon }) => (
 <a href={href} className={`text-white hover:text-gray-300`}>
  <i className={`fab fa-${icon}`}></i>
 </a>
)

export default SocialLink