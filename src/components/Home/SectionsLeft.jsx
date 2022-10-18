import { Col, Container, Row } from "react-bootstrap";

const SectionsLeft = (props) => {
  return (
    <Container>
      <Row className="align-items-center gap-3 flex-sm-column flex-md-column flex-lg-row flex-xl-row mt-5 mb-5">
        <Col className="text-white text-center text-lg-start">
          <h1 className="mb-4 fw-bold">{props.title}</h1>
          <h4>{props.description}</h4>
        </Col>

        <Col className="text-center">
          <img src={props.image} alt="TV" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionsLeft;
