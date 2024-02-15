import React from 'react'
import "./Header.css"

export const Header = ({children}) => {
  return (
    <header>
      <section>
        { children }
      </section>
    </header>
  )
}
