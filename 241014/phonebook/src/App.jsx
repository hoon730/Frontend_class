import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contactform from "./components/Contactform";
import ContactList from "./components/ContactList";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 22px;
`;

function App() {
  return (
    <Wrapper>
      <Title>Phone Book</Title>
      <Container>
        <Row>
          <Col>
            <Contactform />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default App;
