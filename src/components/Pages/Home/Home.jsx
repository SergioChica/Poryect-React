import React from 'react'
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
