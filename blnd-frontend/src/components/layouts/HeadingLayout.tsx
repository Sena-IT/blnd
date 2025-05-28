import React from 'react'

const HeadingLayout = ({heading}:{heading:string}) => {
  return (
    <div className='my-4'>
        <h2 className='text-5xl text-brand-secondary font-medium text-center'>
            {heading}
        </h2>
        {/* <div className="relative h-6 w-full -mt-1">
        <svg className="w-full h-full" viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 12C15 3 30 21 45 9C60 -3 75 27 90 12C105 -3 120 27 135 9C150 -3 165 27 180 12C195 -3 210 27 225 9C240 -3" 
            stroke="#44242D" 
            strokeWidth="8" 
            strokeLinecap="round"
            className="w-full"
          />
        </svg>
      </div> */}
    </div>
  )
}

export default HeadingLayout