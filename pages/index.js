import styled from 'styled-components'
import Head from 'next/head'
import { useState } from 'react'
import Character from '../components/Character'

export default function Characters({ characters }) {
  const [value, setValue] = useState(12)

  const handleShowMore = () => {
    setValue(value + 12)
  }

  return (
    <>
      <Head>
        <title>Star Wars Character | StarWars.com</title>
      </Head>
      <HomeScreenContainer>
        <StarfieldLeft />
        <CharacterContainer>
          {characters
            .filter((character) => character.id !== 28 && character.id !== 77)
            .map(
              (character, index) =>
                index < value && (
                  <Character character={character} key={character.id} />
                )
            )}
        </CharacterContainer>
        <StarfieldRight />
      </HomeScreenContainer>
    </>
  )
}

export async function getStaticProps(context) {
  const characters = await fetch(
    `https://akabab.github.io/starwars-api/api/all.json`
  ).then((res) => res.json())

  return {
    props: {
      characters,
    },
  }
}

const HomeScreenContainer = styled.div``

const StarfieldLeft = styled.div``

const StarfieldRight = styled.div``

const CharacterContainer = styled.div``
