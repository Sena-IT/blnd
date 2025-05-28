import React from 'react'

const SectionSpacingLayout = ({className,children,id}:{className?:string,children:React.ReactNode,id?:string}) => {
  return (
    <div className={`lg:mt-22 md:mt-16 mt-12 ${className}`} id={id}>
        {children}
    </div>
  )
}

export default SectionSpacingLayout