import React from 'react'
import Nav from './Nav/Nav'


const Header = () => {
  return (
    <header><Nav isLoggedIn={false}></Nav></header>
  )
}

export default Header