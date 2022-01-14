import Link from 'next/link'
import styled from 'styled-components'
import { SocialLinks } from '.'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SocialLinks />
      </HeaderLeft>
      <Link href="/">
        <a>
          <img
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt=""
          />
        </a>
      </Link>
      <HeaderRight>
        <HeaderSearch>
          <input placeholder="Search Star Wars" />
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg"
            alt=""
          />
        </HeaderSearch>
        <HeaderActions>
          <button>Log In</button>
          <span>//</span>
          <button>Sign Up</button>
        </HeaderActions>
      </HeaderRight>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  padding: 20px;
  padding-bottom: 0;
  background-image: url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg');
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  > a > img {
    object-fit: contain;
    margin-top: -40px;
    margin-bottom: -20px;
    height: 180px;
    filter: brightness(0) invert(1)
  }
`

const HeaderLeft = styled.div``

const HeaderRight = styled.div``

const HeaderSearch = styled.div``

const HeaderActions = styled.div``
