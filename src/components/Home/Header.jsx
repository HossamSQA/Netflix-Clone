import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center gap-4 text-center mt-5">
          <h1 className="text-white fw-bold">
            Unlimited movies, TV <br />
            shows, and more.
          </h1>

          <h4 className="text-white">Watch anywhere. Cancel anytime.</h4>

          <h5 className="text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>

          <InputGroup className="mb-3 container p-2">
            <FloatingLabel controlId="floatingInput" label="Email address">
              <Form.Control
                type="email"
                placeholder="Enter Your Email Address"
              />
            </FloatingLabel>
            <Button variant="btn btn-red ">
              Get Started <IoIosArrowForward />
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
