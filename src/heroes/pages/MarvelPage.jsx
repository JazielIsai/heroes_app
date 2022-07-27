import React from 'react'
import { HeroList } from '../Components'

export const MarvelPage = () => {
  return (
    <>
        <h2>Marvel Comics</h2>
        <hr/>
        <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}
