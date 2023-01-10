import React from 'react'
import './_button.scss'

interface Props {
    variant: string
    children: React.ReactNode
}

const Button = (props: Props) => {
    const { variant = 'primary', children, ...rest } = props

  return (
    <button className={`button ${variant}`} {...rest} >{children}</button>
  )
}

export default Button