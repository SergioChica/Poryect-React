import React from 'react'
import { Header } from "../../Layouts/Header/Header";
import { Logo } from '../../Logo/Logo';
import { Navbar } from '../../Navbar/Navbar';
import { Items } from '../../Items/Items';




export const Home = () => {
  return (
    <Header>
      <Logo />
      <Navbar>
        <Items content="Hola" />
        <Items content="Adios" />
      </Navbar>
    </Header>
  )
}
