import styled from 'styled-components'
import { NavbarLink } from '.'

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLinks>
        <NavbarLink title="NEWS + BLOG" />
        <NavbarLink title="VIDEO" />
        <NavbarLink title="FILMS" />
        <NavbarLink title="SERIES" />
        <NavbarLink title="INTERACTIVE" />
        <NavbarLink title="COMMUNITY" />
        <NavbarLink title="DATABANK" />
      </NavbarLinks>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  border-top: 1px solid #343434;
  background-color: #000;
  width: 100%;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  position: fixed;
  top: 135px;
  right: 0;
  left: 0;
  z-index: 999;
`

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100%
`
