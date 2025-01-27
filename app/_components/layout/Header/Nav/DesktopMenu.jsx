import React from 'react'

import Link from "next/link";

import { IoLogIn, IoPersonAdd } from "react-icons/io5";
import { FcManager, FcMoneyTransfer } from "react-icons/fc";
import { HiOutlineBellAlert } from "react-icons/hi2";

import "./DesktopMenu.scss"

const DesktopMenu = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <div className='nav-user-data' >
          <Link href="/me/user/wallet">
            <FcMoneyTransfer className='user-profile' />
          </Link>

          <Link href="/me/user/notifications">
          <HiOutlineBellAlert className='user-profile' />
          </Link>
          <Link href="/me/user/">
            <FcManager className='user-profile' />
          </Link>

        </div>
      ) : (
        <div className="nav-links">
          <DesktopMenuLink href="/login" className="login" text="تسجيل الدخول" >
            <IoLogIn />
          </DesktopMenuLink>
          <DesktopMenuLink href="/register" className="register" text="أنشئ حسابك الآن !" >
            <IoPersonAdd />
          </DesktopMenuLink>
        </div>
      )}
    </>
  )
}


const DesktopMenuLink = ({ href, className, text, children }) => {
  return (
    <Link href={href} className={className}>
      <span>{text}</span>
      {children}
    </Link>
  )
}


export default DesktopMenu;