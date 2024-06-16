import { ReactNode } from "react";

type InnerProps = {
  children: ReactNode
}

const Inner = ({children}: InnerProps) => {
  return (
    <div className='page'>
        {children}
    </div>
  )
}

export default Inner;