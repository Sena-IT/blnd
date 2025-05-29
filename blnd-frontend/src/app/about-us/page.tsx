import { getAboutUs } from '@/api/call'
import AboutUs from '@/site-ui/sections/about-us'
import { HomeDataAboutUs, HomeDataType } from '@/types/types'
import React from 'react'

const page = async() => {
    const data:HomeDataType=await getAboutUs()
    console.log(data)
  return (
    <div>
        <AboutUs data={data?.about_us}/>
    </div>
  )
}

export default page