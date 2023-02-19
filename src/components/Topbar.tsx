import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Topbar = ({className}) => {
  return (
    <Wrapper className={className}>
        <Logo><Link to='/' >Куба<span>Ноиды</span></Link></Logo>
        <Nav>
          <NavItem><NavLink className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
                ? "pending"
                : ""
          } to="/administration">Управление объектами</NavLink></NavItem>
          <NavItem><NavLink className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
                ? "pending"
                : ""
          } to="/dashboard">Dashboard</NavLink></NavItem>
          <NavItem><NavLink className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
                ? "pending"
                : ""
          } to="/office">Мой офис</NavLink></NavItem>
        </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`

const NavItem = styled.span`
  a {
    transition: color 0.5s ease;
  }
  .active {
    color: #000;
  }
  .pending {
    color: #2A81D2;
  }
`

const Logo = styled.span`
  color: #000;
  font-size: 2em;
  a, a:hover {
    color: inherit;
  }

  span {
    color: #2A81D2;
  }
  `
