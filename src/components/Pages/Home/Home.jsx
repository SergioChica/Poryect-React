import React from 'react'
import { Header } from "../../Layouts/Header/Header";
import { Logo } from '../../Logo/Logo';
import { Navbar } from '../../Navbar/Navbar';
import { Items } from '../../Items/Items';
import { Text } from '../../Text/Text';




export const Home = () => {
  return (
    <Header>
      <Logo />
      <Text content="Rainbow six" />
      <Navbar>
        <Items content="Hola" />
        <Items content="Adios" />
      </Navbar>
    </Header>
  )
}
