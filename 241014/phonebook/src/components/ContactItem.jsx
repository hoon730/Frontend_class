import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Name = styled.div``;
const Number = styled.div``;

const ContactItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <Row>
        <Col lg={1}>
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
            alt="user"
          />
        </Col>
        <Col lg={11}>
          <Name>{item}</Name>
          <Number>{item.phoneNumber}</Number>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;