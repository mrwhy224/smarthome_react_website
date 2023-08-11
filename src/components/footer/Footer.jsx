import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../../assets/images/logo.svg";
import { Instagram, Whatsapp, Telegram } from 'react-bootstrap-icons';
import { DARK, useTheme } from "../../contexts/Theme"


const Footer = () => {

  const { theme, toggleThemeMode } = useTheme();
  const colorMode = theme.mode === DARK ?'dark' : 'light';
  return (
    <>
    <div className="footer-parent"> 
    <footer className={`footer ${colorMode}`}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><Whatsapp size={24} /></a>
              <a href="#"><Telegram size={24} /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
    </>
  )
};

export default Footer;
