import React from 'react'
import "./_input.scss"

interface Props {
    size: string
    type: string
    placeHolder: string
}

const Input = (props: Props) => {
    const { size = 'medium', ...rest } = props

  return (
    <input className={`input ${size}`} {...rest} />
  )
}

export default Input