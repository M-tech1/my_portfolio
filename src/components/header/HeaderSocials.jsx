import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsDiscord} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/martinsake/' target='_blank'> <BsLinkedin/> </a>
        <a href='https://github.com/m-tech1' target='_blank'> <FaGithub/> </a>
        <a href='https://discordapp.com/users/Ake#2659' target='_blank'> <BsDiscord/> </a>
        {/* <a href='https:linkedin.com' target='_blank'> </a> */}

    </div>
  )
}

export default HeaderSocials