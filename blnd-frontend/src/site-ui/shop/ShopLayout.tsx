import { cn } from '@/lib/utils'
import React from 'react'

const ShopLayout = ({children,className}:{className:string,children:React.ReactNode}) => {
  return (
    <div className={cn('gap-6',className)}>
        {children}
    </div>
  )
}

export default ShopLayout