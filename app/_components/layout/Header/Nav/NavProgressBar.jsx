import React, {useEffect} from 'react'

import "./NavProgressBar.scss"
import useScrollPercentage from '@/app/_lib/Hooks/useScrollPercentage'

const NavProgressBar = () => {
  const scrollPercentage = useScrollPercentage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (scrollPercentage === 0) {
        document.querySelector('body').classList.remove('scrolled');
      } else {
        document.querySelector('body').classList.add('scrolled');
      }
    }
  }, [scrollPercentage]);

  return (
    <div className="nav-progress-bar">
      <div className='inner-bar' style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  )
}

export default NavProgressBar