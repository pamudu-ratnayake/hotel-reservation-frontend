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
  Col
} from "reactstrap";
// core components
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
//   import {useDropzone} from 'react-dropzone';
// import { useMemo } from 'react';
import TaxiReservationHD from "components/Headers/TaxiReservationHD";
// import API from "variables/tokenURL";

//Validation
// const validationSchema = Yup.object({
//   driver_name: Yup.string().required("Required!"),
//   vehicle_type: Yup.string().required("Required!"),
//   vehicle_name: Yup.string().required("Required!"),
//   vehicle_no: Yup.string().required("Required!"),
//   distance: Yup.string().email("Invalid Email!").required("Required!"),
//   driver_con_no: Yup.string().required("Required"),
//   driver_description: Yup.string().required("Required"),
// });

const ReserveTaxi = () => {
  //   let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    driver_name: "",
    vehicle_type: "",
    vehicle_name: "",
    vehicle_no: "",
    distance: "",
    driver_con_no: "",
    driver_description: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);
    // console.log('files', acceptedFiles);

    // let formdata = new FormData();
    // formdata.append("driver_name", values.driver_name);
    // formdata.append("vehicle_type", values.vehicle_type);
    // formdata.append("vehicle_name", values.vehicle_name);
    // formdata.append("vehicle_no", values.vehicle_no);
    // formdata.append("distance", values.distance);
    // formdata.append("driver_con_no", values.driver_con_no);
    // formdata.append("driver_description", values.driver_description);
    // formdata.append("file", acceptedFiles[0]);

    axios
      .post("http://localhost:8080/taxi/addtaxiDetails", values)
      .then((res) => {
        console.log(res);
        console.log("Data", formdata);

        // history.push({
        //   pathname:`/admin/SponsorList`
        // })
      })
      .catch((error) => {
        console.log(error);
      });

    //   alert("");
    // window.location.reload(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validationSchema,
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
                    <h2 className="mb-0">Reserve Taxi</h2>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>driver Name</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
                          type="text"
                          name="driver_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.driver_name}
                        />
                        {formik.touched.driver_name &&
                        formik.errors.driver_name ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.driver_name}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Vehicle Type</label>
                        <Input
                          className="h5"
                          placeholder="ABC (pvt).Ltd"
                          type="text"
                          name="vehicle_type"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.vehicle_type}
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
                    <Col>
                      <FormGroup>
                        <label>Vehicle Name</label>
                        <Input
                          className="h5-black"
                          id="exampleFormControlInput1"
                          placeholder="142, Palm Avenue, Colombo 10 "
                          type="text"
                          name="vehicle_name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.vehicle_name}
                        />
                        {formik.touched.vehicle_name &&
                        formik.errors.vehicle_name ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.vehicle_name}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label>Vehicle No</label>
                        <Input
                          className="h5-black"
                          id="exampleFormControlInput1"
                          placeholder="142, Palm Avenue, Colombo 10 "
                          type="text"
                          name="vehicle_no"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.vehicle_no}
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
                        <label>Driver Description</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
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
                  <Row className="d-flex justify-content-between">
                    <Col className="text-center">
                      <Button
                        
                        type="submit"
                        color="success"
                        size="sm"
                      >
                        Add
                      </Button>
                    </Col>
                    <Col className="text-center">
                      {/* <Link to={"/admin/SponsorList"}> */}
                      <Button color="info" size="sm" name="" type="reset">
                        Cancle
                      </Button>
                      {/* </Link> */}
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReserveTaxi;
