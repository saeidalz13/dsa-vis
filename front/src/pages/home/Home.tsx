import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container className="mt-5 text-center">
        <Row>
          <Col className="mb-4" lg>
            <h1>Data Structure Visulization</h1>
          </Col>

          <Col lg>
            <div className="div-btn-dsa-home-page ">
              <Button className="btn-dsa-home-page" variant="info">
                Array
              </Button>
            </div>
            <div className="div-btn-dsa-home-page ">
              <Button className="btn-dsa-home-page" variant="success">
                Stack
              </Button>
            </div>
            <div className="div-btn-dsa-home-page ">
              <Button className="btn-dsa-home-page" variant="danger">
                Queue
              </Button>
            </div>
            <div className="div-btn-dsa-home-page ">
              <Button className="btn-dsa-home-page" variant="warning">
                Trees
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
