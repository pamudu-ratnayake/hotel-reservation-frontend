import ReactDatetime from "react-datetime";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useEffect, useState } from "react";

const UpdateReservationInformation = (props) => {

  //using history
  let history = useHistory();
  const [post, setPosts] = useState(0);
  
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    hotel_name : post.hotel_name,
    location : post.location,
    room_type : post.room_type,
    room_size : post.room_size,
    facilities : post.facilities,
    con_number : post.con_number,
    email : post.email,
    description : post.description
  };

  const validationSchema = Yup.object({
    hotel_name : Yup.string().required("*Required!"),
    location : Yup.string().required("*Required!"),
    // room_type : Yup.array().required("*Required!"),
    // room_size : Yup.array().required("*Required!"),
    // facilities : Yup.array().required("*Required!"),
    con_number : Yup.string().required("*Required!"),
    email : Yup.string().required("*Required!"),
    description : Yup.string().required("*Required!"),
  });

  useEffect(() => {
    const _id = props.match.params._id;
    console.log('id is: ', _id);
    axios.get(`http://localhost:8080/hotelreservation/getOneHotelReservation/${_id}`)
    .then((res) => {
      console.log(res.data);
      setPosts(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);

  const onSubmit = (values) => {
    console.log('triggered....', values);
    axios.put(`http://localhost:8080/hotelreservation/update-hotelReservation/${props.match.params._id}`, values)
    .then((res) => {
      console.log(res.data);
      console.log("Data", values);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h1 className="mb-0">Add New Reservation Details</h1>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Hotel Name</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Hotel Name"
                          type="text"
                          name="hotel_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={post.hotel_name}
                        />
                        {formik.touched.hotel_name &&
                        formik.errors.hotel_name ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.hotel_name}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Hotel Location</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Hotel Location"
                          type="text"
                          name="location"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={post.location}
                        />
                        {formik.touched.location &&
                        formik.errors.location ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.location}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <label className="mb-3">Room Types</label>
                  <Row>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck1"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="A/C"
                          name="room_type"
                          type="checkbox"
                          as={Checkbox}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          A/C Rooms
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck2"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="NonA/C"
                          name="room_type"
                          type="checkbox"
                          as={Checkbox}
                        />{" "}
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          Non A/C Rooms
                        </label>
                      </div>
                    </Col>                    
                  </Row>
                  <label className="mb-3">Room Size</label>
                  <Row>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck3"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="Family"
                          name="room_size"
                          type="checkbox"
                          as={Checkbox}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Family Bed Room
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck4"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="Couple"
                          name="room_size"
                          type="checkbox"
                          as={Checkbox}
                        />{" "}
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          Couple Bed Room
                        </label>
                      </div>
                    </Col>                    
                  </Row>
                  <label className="mb-3">Facilities</label>
                  <Row>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck5"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="WiFi"
                          name="checkboxOption"
                          type="checkbox"
                          as={Checkbox}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          WiFi
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck6"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="Pool"
                          name="checkboxOption"
                          type="checkbox"
                          as={Checkbox}
                        />{" "}
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          Pool
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck7"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="TV"
                          name="checkboxOption"
                          type="checkbox"
                          as={Checkbox}
                        />{" "}
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          TV
                        </label>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="customCheck8"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value="Bathtub"
                          name="checkboxOption"
                          type="checkbox"
                          as={Checkbox}
                        />{" "}
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck2"
                        >
                          Bathtub
                        </label>
                      </div>
                    </Col>                    
                  </Row>                
                  <hr className="my-4" />
                  <h2 className="mt-4 mb-4">Contact Information</h2>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Contact Number"
                          type="text"
                          name="con_number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={post.con_number}
                        />
                        {formik.touched.con_number &&
                        formik.errors.con_number ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.con_number}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="Enter Email"
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={post.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>                  
                  <Row>
                    <Col md="10">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          id="exampleFormControlTextarea1"
                          placeholder="Description..."
                          rows="3"
                          type="textarea"
                          name="description"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          defaultValue={post.description}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="submit">
                      Publish Reservation
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdateReservationInformation;
