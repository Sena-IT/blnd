import React from 'react'
import { HEADER_NAVBAR_MENU } from '../constants'
import Link from 'next/link'

const HeaderMenu = () => {
  return (
    <React.Fragment>
        {
            HEADER_NAVBAR_MENU.map((menu,i)=>(
                <Link 
                key={i}
                className='text-3xl tracking-tight font-medium text-brand-secondary' href={menu.link}>
                    {menu.name}
                </Link>
            ))
        }
    </React.Fragment>
  )
}

export default HeaderMenu