import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import * as Yup from "yup";
// core components
import axios from "axios";
// import API from "variables/tokenURL";

const ViewReservation = (props) => {
  console.log("Id is: ", props.match.params._id);

  const [addsData, setAdd] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8080/traveler/getOneTravelerDetails/${props.match.params._id}`)
      .then((res) => {
        console.log(res.data);
        setAdd(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log("img here", addsData.advertisement_Des);

  return (
    <>
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Reservation Information</h2>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <Card style={{ width: "61.3rem" }}>
                <CardHeader style={{ fontSize: "2rem" }}>
                  Traveler Reservation Details
                </CardHeader>
                <CardBody style={{ padding: "2rem" }}>
                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Traveler Name
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData?.Traveler_Name}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                NIC
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">: {addsData?.NIC}</span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Contact Number
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData?.Contact_Number}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Address
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData?.Address}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                              Email
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData?.Email}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                    </Card>
                    <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Number Of Nights
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData?.numberOfNights}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                               Room Type
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">: {addsData?.Room_Type}</span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>

                  <Card
                    style={({ width: "28rem" }, { height: "2.5rem" })}
                    className="mb-4"
                  >
                    <CardBody className="pt-1 pt-md-0">
                      <div>
                        <CardText>
                          <Row>
                            <Col xs="3">
                              <span className="h5" style={{ font: "menu" }}>
                                Number Of Rooms
                              </span>
                            </Col>
                            <Col xs="6">
                              <span className="h5">
                                : {addsData?.numberOfRooms}
                              </span>
                            </Col>
                          </Row>
                        </CardText>
                      </div>
                    </CardBody>
                  </Card>
                               {/* <Card
             style={({ width: "28rem" }, { height: "2.5rem" })}
              className="mb-4">
            <CardBody className="pt-1 pt-md-0">
                <div>
                  <CardText>
                    <Row>
                      <Col xs="3">
                        <span className="h5" style={{ font: "menu" }}>
                        Payment Type
                        </span>
                      </Col>
                      <Col xs="6">
                        <span className="h5">:  {addsData.cardtype}</span>
                      </Col>
                    </Row>
                  </CardText>
                </div>
              </CardBody>
            </Card>  */}

                  <div className="mt-5">
                    <Row>
                      <Col>
                        <Link
                          to={`/admin/updatetraveler/${addsData?._id}`}
                        >
                          <Button className="ml-16 mr-8" color="primary">
                            <span className="btn-inner--icon">
                              <i className="ni ni-ruler-pencil" />
                            </span>
                            <span className="btn-inner--text">
                              Update Reservation
                            </span>
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewReservation;
