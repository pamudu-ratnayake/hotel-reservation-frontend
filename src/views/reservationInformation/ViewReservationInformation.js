import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import UserHeader from "components/Headers/UserHeader.js";
import { useEffect, useState, useRef } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  CardImg,
  CardTitle,
  CardText,
  Modal,
} from "reactstrap";


const ViewDisplayReservations = (props) => {
  const [posts, setPosts] = useState(0);

  //using history
  let history = useHistory();

  useEffect(() => {
    const _id = props.match.params._id;
    console.log("id is: ", _id);
    axios
      .get(
        `http://localhost:8080/hotelreservation/getOneHotelReservation/${_id}`
      )
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [exampleModal, setmodalDemo] = useState(false);
  const [deleteID, setDeleteID] = useState('');

  //toggle function
  function toggleModal() {
    setmodalDemo(!exampleModal);
  }

  const deleteReservation = () => {
    axios
      .delete(
        `http://localhost:8080/hotelreservation/delete-hotelReservation/${deleteID}`
      )
      .then((response) => {
        console.log(response);
        history.push({
          pathname: `/admin`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Card style={{ width: "48rem" }}>
          <CardImg
            alt="..."
            src={require("../../assets/img/theme/team-4-800x800.jpg").default}
            top
          />
          <CardBody>
            <CardTitle>{posts.hotel_name}</CardTitle>
            <CardText> {posts.location} </CardText>
            <CardText> {posts.room_type} </CardText>
            <CardText> {posts.room_size} </CardText>
            <CardText> {posts.facilities} </CardText>
            <CardText> {posts.con_number} </CardText>
            <CardText> {posts.email} </CardText>
            <CardText> {posts.description} </CardText>
            <CardText> Rs. {posts.price} per Night </CardText>
            <Link to={`/admin/updatereservation/${posts._id}`}>
              <Button color="primary">Update Details</Button>
            </Link>
            <Button
              color="primary"
              onClick={function (event) {
                toggleModal("exampleModal");
                setDeleteID(posts._id);
              }}
            >
              Delete Details
            </Button>
            <Modal
              className="modal-dialog-centered"
              isOpen={exampleModal}
              toggle={() => toggleModal("exampleModal")}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Confirm to delete this event
                </h5>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => toggleModal("exampleModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                Do you want to delete this event?
              </div>
              <div className="modal-footer">
                <Button
                  color="primary"
                  type="button"
                  onClick={() => deleteReservation()}
                >
                  Confirm Delete
                </Button>
                <Button
                  color="secondary"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => toggleModal("exampleModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default ViewDisplayReservations;
