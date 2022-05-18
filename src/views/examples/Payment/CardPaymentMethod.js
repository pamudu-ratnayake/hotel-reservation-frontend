import React, { useState } from "react";
import * as Yup from "yup";
// import PaymentModal from "./PaymentModal";
import SubscriptionPage from "./SubscriptionPage";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  CardText,
  Input,
  CardTitle,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Modal,
  CardImg,
  Col,
} from "reactstrap";

import ReactDatetime from "react-datetime";
import { useFormik } from "formik";

const CardPaymentMethod = () => {
  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }
  const initialValues = {
    enableReinitialize: true,
    validateOnMount: true,
    customer_name:"",
    card_number:"",
    expiration_date:"",
    cvc_number:"",
  };

  const onSubmit = (values) => {
    console.log("Form Date", values);
    //  values.date_of_the_event = event_date; //watch
    axios
      .post("http://localhost:8080/payment/addpaymentDetails", values)
      .then((res) => {
        console.log(res);
        console.log("Data", values);
        // history.push({
        //   pathname: `/admin/my-event`,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const RegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const validationSchema = Yup.object({
		customer_name: Yup.string().required("*Required!"),
        card_number: Yup.string().matches(
      RegExp,
      "Credit Card Number is not Valid !"
    ).min(16, "Too short").max(16,"Too Long"),
		expiration_date: Yup.string().required("*Required!"),
		cvc_number: Yup.string().required("*Required!"),
	});

  const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});


  return (
    <>
      <Col lg="12" md="12">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h2 className="mb-0">Card Information</h2>
              </Col>
              <Col className="text-right" xs="4"></Col>
            </Row>
          </CardHeader>
          <CardBody>

            <SubscriptionPage/>
          </CardBody>
        </Card>
       
      </Col>
    </>
  );
};

export default CardPaymentMethod;