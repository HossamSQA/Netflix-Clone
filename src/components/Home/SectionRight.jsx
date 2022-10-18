import { Col, Container, Row } from "react-bootstrap";

const SectionRight = (props) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center gap-3 flex-sm-column flex-lg-row mt-5 mb-5">
        <Col className="text-center text-lg-start">
          <img src={props.image} alt="TV" className="img-fluid" />
        </Col>

        <Col className="text-white text-center text-lg-start">
          <h1 className="mb-4 fw-bold">{props.title}</h1>
          <h4>{props.description}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionRight;
