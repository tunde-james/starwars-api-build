import styled from "styled-components"

export default function NavbarLink({ title }) {
  return (
    <NavLink>
      <h4>{title}</h4>
    </NavLink>
  )
}

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid;
  height: 100%;
  text-decoration: none;
  padding: 0 25px;
  transition: color 100ms;
  color: #999;
  cursor: pointer;

  :hover {
    color: #fff;
  }

  :last-of-type {
    border-right: 1px solid;
  }

  > h4 {
    font-size: 0.875rem;
    letter-spacing: 1px;
  }
`


