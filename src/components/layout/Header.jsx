import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "../../assets/images/adm_logo_white.png";
import loheaderbgo from "../../assets/images/header_bg.png";


import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Image,
  Badge,
} from 'react-bootstrap';

const Header = () => {
  return (
    <header id="layout-header" className="header">
      <Navbar fixed="top" expand="lg" bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/tasks">
            <Image
              src={logo}
              height="35"
              alt="ADM Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="/tasks">
                Tasks Dashboard
                <Badge pill bg="warning" className="ms-1" title="Pending Tasks">
                  2
                </Badge>
              </Nav.Link>
              <Nav.Link href="/activity-log">
                Activity Log
                <Badge pill bg="warning" className="ms-1">
                  716
                </Badge>
              </Nav.Link>
              <Nav.Link href="/pipelines">Pipelines</Nav.Link>
              <Nav.Link href="/team">My Team</Nav.Link>
              <Nav.Link href="/clients">My Clients</Nav.Link>
              <Nav.Link href="/files">File Manager</Nav.Link>
              <Nav.Link href="/messages">Messages</Nav.Link>
            </Nav>
            <Nav>
              <Dropdown align="end">
                <Dropdown.Toggle as={Nav.Link} className="d-flex align-items-center my-account">
                  <span className="text-white me-2">Anjana Arora</span>
                  <Image
                    src="http://adm-staging.pivisions-sites.in/themes/adm/assets/images/user_icon.png"
                    width="30"
                    alt="User Icon"
                    roundedCircle
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.ItemText className="px-3 pb-2 text-primary border-bottom">
                    Anjana Arora
                  </Dropdown.ItemText>
                  <Dropdown.Item href="http://adm-staging.pivisions-sites.in/my-profile">
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    data-request="onLogout"
                    data-request-data="redirect: '/login'"
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
