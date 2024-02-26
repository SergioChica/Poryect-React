import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import logo from './assets/logo.png'
import sena from './assets/logosena.png'

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { Home } from './components/Pages/Home/Home'
import { Divs } from './components/Divs/Divs'


import { Header } from "./components/Layouts/Header/Header";

import { Imgs } from './components/Imgs/Imgs';
import { Navbar } from './components/Navbar/Navbar';
import { Items } from './components/Items/Items';
import { Text } from './components/Text/Text';
import { NotFound } from './components/NotFound/NotFound'
import { Title } from './components/Title/Title'


 const AppRoutes = () => {
    let routes = useRoutes ([
      { path:"/", element: <Home />},
      { path:"/*", element: <NotFound />},
    ])
    return routes
 }

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header>
          <Divs style='logoAndName' >
          <Imgs img={logo} style='logo' />
          <Divs style='containerName' >
          <Title style='textHeader' content="SERGIO ANDRES CHICA JAIMES" />
          <hr />
          </Divs>
          </Divs>

          <Divs style='menu'>
          <Navbar>
            <Items content="Inicio" route='/' />
            <Items content="Perfil" route='/' />
            <Items content="Proyecto" route='/' />
            <Items content="References" route='/' />
            <Items content="Experiencia" route='/' />
          </Navbar>
          </Divs>

          <Divs style='containerLogoandNets' >
            <Imgs img={sena} style= 'imgSena'/>
            <Divs style='iconsNets' >
              <FaLinkedinIn />
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaWhatsapp />
            </Divs>
          </Divs>
        </Header>
        <AppRoutes />
      </>
  )
}

export default App
