import React from 'react'

export interface ButtonProps {
    label: string;
    cs?: {
      bg?: string;
      color?: string;
    }
}

const Button = (props: ButtonProps) => {
  return (
    <button style={{
      backgroundColor: props.cs?.bg,
      color: props.cs?.color,
    }}>{props.label}</button>
  )
}

export default Button