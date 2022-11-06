import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  size: 'SM' | 'MD' | 'LG' | 'XL'
  label: string
  clickHandler: () => {}
  color: 'PRIMARY' | 'SECONDARY'
  style?: Record<string, unknown>
}

const AppButton = ({ size, label, clickHandler, color, style }: ButtonProps) => {
  const [buttonSize, setButtonSize] = useState<number>(12)
  const [bgColor, setBgColor] = useState<string>('')
  useEffect(() => {
    determineButtonSize()
    determineBGColor()
  }, [size, color])

  const determineButtonSize = () => {
    switch (size) {
      case 'SM':
        setButtonSize(100)
        break
      case 'MD':
        setButtonSize(150)
        break
      case 'LG':
        setButtonSize(200)
        break
      case 'XL':
        setButtonSize(275)
        break
      default:
        setButtonSize(300)
    }
  }
  const determineBGColor = () => {
    switch (color) {
      case 'PRIMARY':
        setBgColor('bg-app-primary')
        break
      case 'SECONDARY':
        setBgColor('bg-app-secondary')
        break
      default:
        setBgColor('bg-app-primary')
    }
  }
  return (
    <Button style={style} buttonSize={buttonSize} className={`${bgColor} text-white rounded`} onClick={clickHandler}>
      {label}
    </Button>
  )
}

export default AppButton

const Button = styled.button<{ buttonSize: number }>`
  width: ${(props) => (props.buttonSize ? props.buttonSize : 100)}px;
  padding: 10px;
  font-size: 1.2rem;
  transition: 0.3s all ease-in-out;

  :hover {
    box-shadow: 0 0 13px 5px rgba(0, 0, 0, 0.2);
    filter: brightness(${0.2 + 1});
  }
`
