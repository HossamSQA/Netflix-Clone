import { Col, Container, Dropdown, ListGroup, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row className="p-5 text-white-50">
        <p>Questions? Contact US</p>
        <Col>
          <ListGroup as="ul" className="text-align-start">
            <ListGroup.Item className="listItem text-white-50"></ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              FAQ
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Investor Relations
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Privacy
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Speed Test
            </ListGroup.Item>

            <ListGroup.Item className="listItem">
              <Dropdown>
                <Dropdown.Toggle variant="dark">Language</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Arabic</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ListGroup.Item>

            <ListGroup.Item className="listItem text-white-50">
              Netflix Egypt
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup as="ul">
            <ListGroup.Item className="listItem text-white-50">
              Help Center
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Jobs
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Cookie Preferences
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Legal Notices
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col>
          <ListGroup as="ul">
            <ListGroup.Item className="listItem text-white-50">
              Account
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Ways to Watch
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Corporate Information
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Only on Netflix
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col>
          <ListGroup as="ul">
            <ListGroup.Item className="listItem text-white-50">
              Media Center
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Terms of Use
            </ListGroup.Item>
            <ListGroup.Item className="listItem text-white-50">
              Contact Us
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
