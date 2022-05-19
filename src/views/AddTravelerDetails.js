// reactstrap components
import React, { useState , useMemo } from "react";
import ReactDatetime from "react-datetime";
import {Link} from "react-router-dom"


import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Modal,
  CardBody,
  FormGroup,
  CardImg,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
// core components
// import AdvertisementHeader from "components/Headers/AdvertisementHandling&BoostingHeaders/AdvertisementHeader";

import { useFormik } from "formik";

const AddTravelerDetails = (props) => {

  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }


  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    Traveler_Name: "",
    Traveler_ID: "",
    NIC: "",
    Address: "",
    Email: "",
    Contact_Number:"",
    checkInDate: "",
    numberOfNights: "",
    Room_Type:"",
    numberOfRooms: "",
  };
  var boosting_Package = ['Single Bed','King Bed','Queen Bed']
  const [newPackage, setnewPackage] = useState(null);
  
  
  const [boostPK, setBoostPK] = useState('');
  
  
  
  function totalcal(event) {
       
       
  
       for (var i = 0; i < boosting_Package .length; i++){
         
        if(event.target.value == boosting_Package [i]);{
  
          switch(event.target.value)
         {
           case 'Single Bed':
              setnewPackage('LKR. 3500.00');
  
              break;
             
            case 'King Bed':
              setnewPackage('LKR. 5750.00');
             
              break;
            
            case 'Queen Bed':
              setnewPackage('LKR. 5000.00');
              
              break;
             
            default:
              setnewPackage('LKR. 00.00');
                    break;
         }
    
        }
        break;
    }
  }
  
  const total = newPackage;
  // const validationSchema = Yup.object({
  //   service_Provider_Name: Yup.string().required("Required !"),
  //   contact_Number_SP: Yup.string().matches(

  //     "Phone Number is not Valid !"
  //   ).min(10, "Too short").max(10,"Too Long"),
  //   email_SP: Yup.string().email("Invalid Email!").required("Required !"),
  //   service_Type: Yup.string().required("Required !"),
  //   advertisement_Duration: Yup.string().required("Required !"),
  //   advertisement_title:Yup.string().required("Required !"),
  //   advertisement_Des: Yup.string().required("Required !"),
  //   // advertisement_Pic: Yup.string().required("Required !"),
    
    
  // });

  const onSubmit = (values) => {
    console.log("submit regard",values)
      axios
      .post("http://localhost:8080/traveler/addTravelerDetails", values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        // history.pushState({
        //   pathname: ''
        // })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validationSchema,
  });

  return (
    <>
      {/* <AdvertisementHeader /> */}
      {/* Page content */}
      <Container className="mt--7">
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h2 className="mb-0">Traveler Information</h2>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Traveler Name </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Traveler_Name}
                          id="Traveler_Name "
                          name="Traveler_Name"
                          placeholder="Enter Your Name"
                          type="text"
                        />
                        {/* {formik.touched.Traveler_Name &&
                        formik.errors.Traveler_Name ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Traveler_Name}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Traveler ID </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.Traveler_ID}
                          id="Traveler_ID"
                          name="Traveler_ID"
                          type="text"
                        />
                        {/* {formik.touched.Traveler_ID && formik.errors.Traveler_ID ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Traveler_ID}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>NIC </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.NIC}
                          id="NIC"
                          name="NIC"
                          placeholder="Enter Your NIC"
                          type="text"
                        />
                        {/* {formik.touched.NIC &&
                        formik.errors.NIC ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.NIC}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Address}
                          id="Address "
                          name="Address"
                          placeholder="Enter Your Address"
                          type="text"
                        />
                        {/* {formik.touched.Address &&
                        formik.errors.Address ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Address}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label> Email </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.Email}
                          id="Email"
                          name="Email"
                          placeholder="Enter Your Email"
                          type="text"
                        />
                        {/* {formik.touched.Email && formik.errors.Email ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Email}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Contact Number </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Contact_Number}
                          id="Contact_Number"
                          name="Contact_Number"
                          placeholder="Enter Your Contact Number"
                          type="text"
                        />
                        {/* {formik.touched.Contact_Number &&
                        formik.errors.Contact_Number ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Contact_Number}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col md="6">
                      <FormGroup>
                        <label>Check-in Date</label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                            {/* {formik.touched.checkInDate 
                              && formik.errors.checkInDate ? 
                              <div style={{ color: "red" }}>
                              {formik.errors.checkInDate}</div> : null} */}
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "MM/DD/YY",
                            }}
                            dateFormat="DD/MM/YYYY"
                            timeFormat={false}
                            onChange={(value) =>
                              formik.handleChange({
                                target: {
                                  name: "checkInDate",
                                  value,
                                },
                              })
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.checkInDate}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Number Of Nights </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.numberOfNights}
                          id="numberOfNights"
                          name="numberOfNights"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>1 Night</option>
                          <option>2 Night</option>
                          <option>3 Night</option>
                          <option>4 Night</option>
                          <option>5 Night</option>
                          <option>6 Night</option>
                          <option>7 Night</option>
                          <option>8 Night</option>
                          <option>9 Night</option>
                          <option>10 Night</option>
                        </Input>
                        {/* {formik.touched.numberOfNights &&
                        formik.errors.numberOfNights ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.numberOfNights}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                  </Row> 
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Room Type </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.Room_Type}
                          id="Room_Type"
                          name="Room_Type"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>Single Bed</option>
                          <option>King Bed</option>
                          <option>Queen Bed</option>
                          
                        </Input>
                        {/* {formik.touched.Room_Type &&
                        formik.errors.Room_Type ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.Room_Type}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Number Of Rooms </label>
                        <Input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.numberOfRooms}
                          id="numberOfRooms"
                          name="numberOfRooms"
                          type="select"
                        >
                          <option>Choose...</option>
                          <option>1 Room</option>
                          <option>2 Room</option>
                          <option>3 Room</option>
                          <option>4 Room</option>
                          <option>5 Room</option>
                          <option>6 Room</option>
                          <option>7 Room</option>
                          <option>8 Room</option>
                          <option>9 Room</option>
                          <option>10 Room</option>
                        </Input>
                        {/* {formik.touched.numberOfRooms &&
                        formik.errors.numberOfRooms ? (
                          <div style={{ color: "red" }}>
                            {formik.errors.numberOfRooms}
                          </div>
                        ) : null} */}
                      </FormGroup>
                    </Col>
                  </Row> 
                  <br></br>
                 
                  <br></br>
                  <br></br>
                  <Row>
                    <Col className="text-center" xs="3" >
                      <Button
                        block
                        className="mb-4 ml-9"
                        color="primary"
                        type="button"
                        onClick={() => toggleModal("defaultModal")}
                      ><span className="btn-inner--icon">
                      
                      </span>
                      <span className="btn-inner--text"> 
                        Add Reservation
                        </span>
                      </Button>
                    </Col>
                    <Modal
                      className="modal-dialog-centered"
                      isOpen={defaultModal}
                      toggle={() => toggleModal("defaultModal")}
                    >
                      <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-default">
                        Reservation Preview
                        </h6>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => toggleModal("defaultModal")}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <Card
                          className="bg-secondary shadow"
                          style={{ width: "28rem" }}
                        >
                         
                            <CardBody>
                              <CardTitle>{formik.values.Traveler_Name}</CardTitle>
                              <CardText>
                              {formik.values.NIC}
                              </CardText>
                              <CardText>
                              {formik.values.Address}
                              </CardText>
                              <CardText>
                              {formik.values.Email}
                              </CardText>
                           

                            </CardBody>
                         
                        </Card>
                      </div>
                      <div className="modal-footer">
                      <Link to={`/serviceprovider/myadverisementlist`}>
                        <Button
                          color="primary"
                          type="submit"
                          onClick={() => {onSubmit(formik.values)}}
                        >
                          Confirm Your Request
                        </Button>
                        </Link>
                        <Button
                          className="ml-auto"
                          color="link"
                          data-dismiss="modal"
                          type="button"
                          onClick={() => toggleModal("defaultModal")}
                        >
                          Close
                        </Button>
                      </div>
                    </Modal>
                   
                    <Col className="text-center ml-9" xs="4">
                      <Button
                        className="mr-2 ml-9"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lm"
                      >
                        Cancle
                      </Button>
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

export default AddTravelerDetails;
