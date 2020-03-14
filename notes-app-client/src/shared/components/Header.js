import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useUser } from '../hooks/useUser';

const Header = ({ title, history }) => {
  const { user, logout } = useUser();

  const handleLogout = async () => {
    await logout();
    history.push('/login');
  };

  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">{title}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {user
            ? <NavItem onClick={handleLogout}>Logout</NavItem>
            : <>
              <LinkContainer to='/signup'>
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
export default withRouter(Header);