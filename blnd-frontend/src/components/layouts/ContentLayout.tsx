import React from 'react'

const ContentLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='lg:max-w-7xl lg:mx-auto w-full'>
        {children}
    </div>
  )
}

export default ContentLayout