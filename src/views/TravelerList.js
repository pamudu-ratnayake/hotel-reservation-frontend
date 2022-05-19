import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  FormGroup,
  CardText,
  CardTitle,
  Table,
  CardImg,
  CardBody,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  Modal,
  Button,
  Container,
  Input,
} from "reactstrap";
// import ReactDatetime from "react-datetime";
// core components

import React from "react";
import axios from "axios";


const TravelerList = (props) => {
  const [defaultModal, setmodalDemo] = useState(false);

  function toggleModal() {
    setmodalDemo(!defaultModal);
  }

  const [addslist, setviewlist] = useState([]);
  const [deleteID, setDeleteID] = useState('');

  useEffect(() => {
   axios
      .get("http://localhost:8080/traveler/getTravelerDetails")
      .then((res) => {
        setviewlist(res.data);
        console.log(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteRequest = () => {
    console.log('ID eka: ',deleteID)
    axios
      .delete(
        `/advertisement/deleteAdvertisement/${deleteID}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
      window.location.reload(false);
  };

  return (
    <>
      {/* <AdvertisementListHeader /> */}
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Card>
          <FormGroup>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Traveler ID</th>
                  <th scope="col">Traveler Name </th>
                  <th scope="col">NIC </th>
                  <th scope="col">Address </th>
                  <th scope="col">Email </th>
                  <th scope="col">Contact_Number </th>
                  <th scope="col">numberOfNights </th>
                  <th scope="col">Room_Type </th>
                  <th scope="col">numberOfRooms </th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {addslist.map((addslist) => (
                  <tr key={addslist._id}>
                    <td>{addslist._id}</td>
                    <td>{addslist.Traveler_Name}</td>
                    <td>
                      <i className="bg-warning" />
                      {addslist.NIC}
                    </td>
                    <td>
                      <div className="avatar-group">
                        {addslist.Address}
                      </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        {addslist.Email}
                      </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        {addslist.Contact_Number}
                      </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        {addslist.numberOfNights}
                      </div>
                    </td> 
                    <td>
                      <div className="avatar-group">
                        {addslist.Room_Type}
                      </div>
                    </td>
                    <td>
                      <div className="avatar-group">
                        {addslist.numberOfRooms}
                      </div>
                    </td>
  
                    <Modal
                className="modal-dialog-centered"
                isOpen={defaultModal}
                toggle={() => toggleModal("defaultModal")}
              >
                <div className="modal-header">
                  <h6 className="modal-title" id="modal-title-default">
                    Confirm Your Deletion
                  </h6>
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => toggleModal("defaultModal")}
                  >
                    <span aria-hidden={true}> </span>
                  </button>
                </div>
                <div className="modal-body">
                  <Card
                    className="bg-secondary shadow"
                    style={{ width: "28rem" }}
                  >
                    <Card style={{ width: "28rem" }}>
                      <CardBody>
                        <CardText>
                          Do you want to delete this request ?
                        </CardText>
                      </CardBody>
                    </Card>
                  </Card>
                </div>
                <div className="modal-footer">
                  <Button
                    color="primary"
                    type="button"
                   onClick={function(event){toggleModal("defaultModal"); deleteRequest()}}
                 
                  >
                    
                    Delete Request
                  </Button>
                  <Button
                   color="primary"
                   type="button"
                    onClick={() => toggleModal("defaultModal")}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          role="button"
                          size="sm"
                          color=""
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <Link to={`/admin/viewreservation/${addslist._id}`}>
                            <DropdownItem>View Request</DropdownItem>
                          </Link>
                          
                          <DropdownItem                 
                          onClick={function(event){toggleModal("defaultModal"); setDeleteID(addslist._id)}}
                          >
                            Delete Request
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </FormGroup>
        </Card>
      </Container>
    </>
  );
};

export default TravelerList;
