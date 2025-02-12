"use client";

import React from 'react'
import { useState } from "react";

import Link from "next/link";

import { IoLogIn, IoPersonAdd, IoClose, IoPersonCircleOutline, IoVideocam } from "react-icons/io5";
import { FcManager, FcMoneyTransfer, FcVideoCall } from "react-icons/fc";

import { FaBars } from 'react-icons/fa';

import "./PhoneMenu.scss";

//todo: make phone animation with react animation not with classes but with react animation

const PhoneMenu = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglePhoneMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector(".phone-menu").classList.toggle("hidden")
  }

  return (
    <>
      <div className="phone-toggle" onClick={() => togglePhoneMenu()}>
        {isMenuOpen ? (
          <IoClose className="phone-toggle-icon" />
        ) : (
          <FaBars className="phone-toggle-icon" />
        )}
      </div>

      <div className="phone-menu hidden">
        {isLoggedIn ?

          <ul>
            <PhoneMenuLink href="/me/user" onClick={togglePhoneMenu} text="حسابي">
              <FcManager className='user-icon icon' />
            </PhoneMenuLink>
            <PhoneMenuLink href="/me/user/wallet" onClick={togglePhoneMenu} text="المحفظة">
              <FcMoneyTransfer className='courses-icon icon' />
            </PhoneMenuLink>
            <PhoneMenuLink href="/me/user/courses" onClick={togglePhoneMenu} text="كورساتي">
              <IoVideocam className='courses-icon icon' />
            </PhoneMenuLink>
          </ul>
          :
          <ul>
            <PhoneMenuLink href="/login" onClick={togglePhoneMenu} text="تسجيل الدخول">
              <IoLogIn className='login-icon icon' />
            </PhoneMenuLink>
            <PhoneMenuLink href="/register" onClick={togglePhoneMenu} text="أنشئ حسابك الآن!">
              <IoPersonAdd className='register-icon icon' />
            </PhoneMenuLink>
          </ul>
        }
        <div className="phone-menu-closing-layer" onClick={() => togglePhoneMenu()}></div>
      </div>
    </>
  )
}




const PhoneMenuLink = ({ children, text, href, className, onClick }) => {
  return (
    <Link className={className} href={href} onClick={() => onClick()}>
      <div className='container'>
        {children}
        <span>{text}</span>
      </div>
    </Link>
  )
}

export default PhoneMenu;