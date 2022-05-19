// Update_Sponsor

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
    InputGroupAddon,
    InputGroupText,
    InputGroup,
  } from "reactstrap";
  // core components
  import TaxiReservationHD from "components/Headers/TaxiReservationHD";
  import { Formik, useFormik } from "formik";
  import * as Yup from "yup";
  import axios from "axios";
  import React, { useEffect, useState, useMemo } from "react";
  import { useHistory } from "react-router";
//   import API from "variables/tokenURL";
  
  const validationSchema = Yup.object({
    driver_name: Yup.string().required("Required!"),
    vehicle_type: Yup.string().required("Required!"),
    vehicle_name: Yup.string().required("Required!"),
    vehicle_no: Yup.string().required("Required!"),
    distance: Yup.string().required("Required!"),
    driver_con_no: Yup.string().required(),
    driver_description: Yup.string().required()
  });
  
  const UpdateTaxiReservation = (props) => {
    console.log("ID is", props.match.params._id);
  
    const [details, setCustomerRequest] = useState(0);
    let history = useHistory();
  
    const initialValues = {
      enableReinitialize: true,
      validateOnMount: true,
    //   _id: details._id,
      driver_name: details.driver_name,
      vehicle_type: details.vehicle_type,
      vehicle_name: details.vehicle_name,
      vehicle_no: details.vehicle_no,
      distance: details.distance,
      driver_con_no: details.driver_con_no,
      driver_description: details.driver_description
    };
  
  
    const onSubmit = (values) => {
      console.log("form data", values);
      axios
        .put(
          `http://localhost:8080/taxi/update-taxidetails/${props.match.params._id}`,
          values
        )
        .then((res) => {
          console.log(res);
        //   history.push({
        //     pathname: "/admin/SponsorList/${values._id}",
        //   });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/taxi/getOneTaxiDetails/${props.match.params._id}`)
        .then((res) => {
          console.log(res);
          setCustomerRequest(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const formik = useFormik({
      enableReinitialize: true,
      validateOnMount: true,
      initialValues,
      onSubmit,
      validationSchema,
    });
  
    return (
      <>
        <TaxiReservationHD />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4"></Col>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h2 className="mb-0">Update Taxi Details</h2>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={formik.handleSubmit}>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Sponsor ID</label>
                          <Input
                            id="exampleFormControlInput1"
                            placeholder="Sponsor ID"
                            type="text"
                            name="_id"
                            disabled
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // value={formik.values.regNo}
                            defaultValue={details._id}
                          />
                          {formik.touched._id && formik.errors._id ? (
                            <div style={{ color: "red" }}>
                              {formik.errors._id}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Compay Registration Number</label>
                          <Input
                            id="exampleFormControlInput1"
                            placeholder="Sponsor ID"
                            type="text"
                            name="driver_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // value={formik.values.driver_name}
                            defaultValue={details.driver_name}
                          />
                          {formik.touched.driver_name && formik.errors.driver_name ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.driver_name}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Company Name</label>
                          <Input
                            placeholder="Event ID"
                            type="text"
                            name="vehicle_type"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // value={formik.values.vehicle_type}
                            defaultValue={details.vehicle_type}
                          />
                          {formik.touched.vehicle_type &&
                          formik.errors.vehicle_type ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.vehicle_type}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            placeholder="Event ID"
                            type="text"
                            name="vehicle_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // value={formik.values.vehicle_name}
                            defaultValue={details.vehicle_name}
                          />
                          {formik.touched.vehicle_name &&
                          formik.errors.vehicle_name ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.vehicle_name}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            type="text"
                            name="vehicle_no"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // value={formik.values.vehicle_no}
                            defaultValue={details.vehicle_no}
                          />
                          {formik.touched.vehicle_no &&
                          formik.errors.vehicle_no ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.vehicle_no}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            id="exampleFormControlInput1"
                            placeholder="142, Palm Avenue, Colombo 10 "
                            type="text"
                            name="distance"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.distance}
                          />
                          {formik.touched.distance &&
                          formik.errors.distance ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.distance}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            id="exampleFormControlInput1"
                            placeholder="142, Palm Avenue, Colombo 10 "
                            type="text"
                            name="driver_con_no"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.driver_con_no}
                          />
                          {formik.touched.driver_con_no &&
                          formik.errors.driver_con_no ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.driver_con_no}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            id="exampleFormControlInput1"
                            placeholder="142, Palm Avenue, Colombo 10 "
                            type="text"
                            name="driver_description"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.driver_description}
                          />
                          {formik.touched.driver_description &&
                          formik.errors.driver_description ? (
                            <div style={{ color: "red" }}>
                              {formik.errors.driver_description}
                            </div>
                          ) : null}
                        </FormGroup>
                      </Col>
                    </Row>
  
                    <div className="d-flex justify-content-between">
                      <Button
                        color="success"
                        size="sm"
                        type="submit"
                        // href="/admin/SponsorList"
                      >
                        Update
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
  
  export default UpdateTaxiReservation;
  