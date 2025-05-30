import Link from 'next/link'
import React from 'react'

const BrandLogo = () => {
  return (
    <Link href={'/'} className='flex flex-col -space-y-3 items-center'>
        <h2 className='text-7xl -tracking-[6px] font-bold text-brand-secondary text-center mt-1.5'>
          BLND.
        </h2>
        <span className='text-3xl -tracking-[2px] font-bold text-brand-secondary text-center'>
          Wellness
        </span>
    </Link>
  )
}

export default BrandLogo