import ReactDatetime from "react-datetime";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory, Link  } from "react-router-dom";
import { Checkbox} from "@material-ui/core";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useEffect, useState } from "react";
import SMShelper from "variables/SMShelper";

const DisplayReservations = () => {

    const [posts, setPosts] = useState(0);

  //using history
  let history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8080/hotelreservation/get-hotelReservation`)
    .then((res) => {
      console.log(res.data);
      setPosts(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);

  const OTPgenerate = () => {
    SMShelper();
  }


  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>

      {posts && posts.map((posts) => (    
      <Card style={{ width: "18rem" }} key={posts._id}>
          <CardImg
            alt="..."
            src={require("../../assets/img/theme/team-4-800x800.jpg").default}
            top
          />
          <CardBody>
            <CardTitle>{posts.hotel_name}</CardTitle>
            <CardText> {posts.location} </CardText>
            <CardText> Rs. {posts.price} per Night </CardText>
            <Link to={`/admin/viewreservation/${posts._id}`}>
            <Button color="primary" >
              View Details
            </Button>
            </Link>
            <Button color="primary" onClick={() => {OTPgenerate()}}> OTP Send </Button>
          </CardBody>
        </Card>
        ))}
      </Container>
    </>
  );
};

export default DisplayReservations;
