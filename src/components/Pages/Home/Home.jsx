import React from 'react'
import { Header } from "../../Layouts/Header/Header";
import { Logo } from '../../Logo/Logo';
import { Navbar } from '../../Navbar/Navbar';
import { Items } from '../../Items/Items';
import { Text } from '../../Text/Text';
import { Main } from '../../Layouts/Main/Main';
import { DescriptionProfile } from '../../DescriptionProfile/DescriptionProfile';
import { PictureProfile } from '../../PictureProfile/PictureProfile';





export const Home = () => {
  return (
    <>

    <Main>
      <PictureProfile />
      <DescriptionProfile />  
    </Main>
    </>
  )
}
