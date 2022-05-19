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
//   Pick_up_point: Yup.string().required("Required!"),
//   Where_to: Yup.string().required("Required!"),
//   Pich_up_time: Yup.string().required("Required!"),
//   vehicle_type: Yup.string().required("Required!"),
//   distance: Yup.string().email("Invalid Email!").required("Required!"),
//   driver_con_no: Yup.string().required("Required"),
//   Delivery_notes: Yup.string().required("Required"),
// });

const ReserveTaxi = () => {
  //   let history = useHistory();

  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    Pick_up_point: "",
    Where_to: "",
    Pich_up_time: "",
    vehicle_type: "",
    distance: "",
    driver_con_no: "",
    Delivery_notes: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);
    // console.log('files', acceptedFiles);

    // let formdata = new FormData();
    // formdata.append("Pick_up_point", values.Pick_up_point);
    // formdata.append("Where_to", values.Where_to);
    // formdata.append("Pich_up_time", values.Pich_up_time);
    // formdata.append("vehicle_type", values.vehicle_type);
    // formdata.append("distance", values.distance);
    // formdata.append("driver_con_no", values.driver_con_no);
    // formdata.append("Delivery_notes", values.Delivery_notes);
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

      alert("");
    window.location.reload(false);
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
                        <label>Pick up point</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
                          type="text"
                          name="Pick_up_point"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Pick_up_point}
                        />
                        {formik.touched.Pick_up_point &&
                        formik.errors.Pick_up_point ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Pick_up_point}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Where to</label>
                        <Input
                          className="h5"
                          placeholder="ABC (pvt).Ltd"
                          type="text"
                          name="Where_to"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Where_to}
                        />
                        {formik.touched.Where_to &&
                        formik.errors.Where_to ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Where_to}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Pich up time</label>
                        <Input
                          className="h5-black"
                          id="exampleFormControlInput1"
                          placeholder="142, Palm Avenue, Colombo 10 "
                          type="text"
                          name="Pich_up_time"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Pich_up_time}
                        />
                        {formik.touched.Pich_up_time &&
                        formik.errors.Pich_up_time ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Pich_up_time}
                          </div>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label>Vehicle type</label>
                        <Input
                          className="h5-black"
                          id="exampleFormControlInput1"
                          placeholder="142, Palm Avenue, Colombo 10 "
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
                        <label>Delivery notes</label>
                        <Input
                          className="h5"
                          id="exampleFormControlInput1"
                          placeholder="reg000123456"
                          type="text"
                          name="Delivery_notes"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Delivery_notes}
                        />
                        {formik.touched.Delivery_notes &&
                        formik.errors.Delivery_notes ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Delivery_notes}
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
