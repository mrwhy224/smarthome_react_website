import React,{ useContext, useEffect, useState } from 'react'

import { Container, Nav, Navbar } from './Style';
import { NavLink,Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { DARK, useTheme } from "../../contexts/Theme"
import logo from "../../assets/images/logo.svg"

const Header = (props) => {
  const links = [
    {
      path: '/',
      name: 'خانه',
      icon: 'fa fa-plus',
      exact: true,
    },
    {
      path: '/login',
      name: 'ورود',
      icon: 'fa fa-plus',
      exact: false,
    },
    {
      path: '/dashboard',
      name: 'داشبورد',
      icon: 'fa fa-tachometer-alt',
      exact: false,
    },
  ]
  const { theme, toggleThemeMode } = useTheme();

  const colorMode = theme.mode === DARK ?'dark' : 'light';
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname==routeName? ' active' : '';
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 940) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLinkStyle = {
    color:"#fff"
  };
  const NavbarStyle = {
      borderRadius:"0px 0px 50px 50px"
  };

  return (
    <>
      <Navbar style={ scrolled ? NavbarStyle : {}} sticky="top" bg={ scrolled ? colorMode:"" } data-bs-theme={ scrolled ? colorMode:"" } >
        <Container>
          <Nav >
            <Navbar.Brand><Link to="/">
              <img src={logo} alt="logo" />
            </Link></Navbar.Brand>
            {links.map((route, index) => (
              <li className='sidebar-item' key={ index } exact="true">
                <NavLink style={ !scrolled ? NavLinkStyle : {}} to={route.path} className={'nav-link sidebar-link'+activeRoute(route.path)} exact={ route.exact } >
                  <i className={route.icon} />
                  <span className="hide-menu">{route.name}</span>
                </NavLink>
              </li>
            ))}
          </Nav>

        </Container>
      </Navbar>
      </>
  )
}

export default Header
