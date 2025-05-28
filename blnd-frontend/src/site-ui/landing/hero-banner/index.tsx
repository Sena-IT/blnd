import React from 'react'
import HeroSwiper from './children/HeroSwipper'
import { HomeDataBannerImageType } from '@/types/types'

const HeroBanner = ({banner}:{banner:HomeDataBannerImageType[]}) => {
  return (
    <div className='h-[calc(100vh-120px)] w-full'>
        <div className='pt-3 size-full lg:mt-12 mt-6'>
            <HeroSwiper banner={banner}/>
        </div>
    </div>
  )
}

export default HeroBanner