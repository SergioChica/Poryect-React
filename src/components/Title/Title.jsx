import React from 'react'

export const Title = ({content = "Hola",style}) => {
  return (
      <h2 className={style} >{content}</h2>
  )
}
