import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useUser } from '../hooks/useUser';

const Header = () => {
  const { user, logout } = useUser();

  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">{user ? 'Logged In' : 'Logged Out'}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {user
            ? <NavItem onClick={logout}>Logout</NavItem>
            : <>
              <LinkContainer to="/signup">
                <NavItem href='/signup'>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to='/login'>
                <NavItem href='/login'>Login</NavItem>
              </LinkContainer>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;