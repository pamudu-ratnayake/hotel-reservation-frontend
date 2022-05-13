// SponsorList

import {
    Card,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Table,
    Container,
    Row,
    Col,
    Modal,
    Button,
    Input,
  } from "reactstrap";
  // core components
  import TaxiReservationHD from "components/Headers/TaxiReservationHD";
  import axios from "axios";
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  // import API from "variables/tokenURL";
  
  const MyTaxiReservations = (props) => {
    const [posts, setPosts] = useState([]);
    const [exampleModal, setModalDemo] = useState(false);
    const [searchStr, setSearch] = useState("");
    const [deleteID, setDeleteID] = useState('');
  
    const toggleModal = () => {
      setModalDemo(!exampleModal);
    };
  
    useEffect(() => {
      API
        .get("/taxi/get-taxidetails")
        .then((res) => {
          setPosts(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    const deleteCustomer = () => {
      API
        .delete(`/taxi/delet-taxidetails/${deleteID}`)
        .then((res) => {
          console.log(res);
          // this.props.history.push({
          //   pathname: '/admin/signup'
          // })
        })
        .catch((error) => {
          console.log(error);
        });
  
      window.location.reload(false);
    };
  
    return (
      <>
        <TaxiReservationHD />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row>
                    <Col className="border-0" xl="7">
                      <h3 className="mb-0">My Taxi Reservations</h3>
                    </Col>
                    <Col xs="3">
                      <div>
                        <Input
                          type="text"
                          placeholder="Search by Name..."
                          style={{
                            borderWidth: "2.5px",
                            width: "15rem",
                            height: "2rem",
                            textAlign: "left",
                            borderRadius: "15px",
                          }}
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                        />
                      </div>
                    </Col>
                    <Col className="col text-right" xl="">
                      <Link to={"/admin/Add_Sponsor"}>
                        <Button color="primary" size="sm" name="">
                          Add Reservations
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">driver_name</th>
                      <th scope="col">vehicle_type</th>
                      <th scope="col">vehicle_name</th>
                      <th scope="col">vehicle_no</th>
                      <th scope="col">distance</th>
                      <th scope="col">driver_con_no</th>
                      <th scope="col">driver_description</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {posts
                    //   .filter((r) => {
                    //     if (searchStr === "") {
                    //       return r;
                    //     } else if (
                    //       r.companyName
                    //         .toLowerCase()
                    //         .includes(searchStr.toLowerCase())
                    //     ) {
                    //       return r;
                    //     }
                    //   })
                      .map((posts) => (
                        <tr key={posts._id}>
                          <td scope="row">
                            <Media className="align-items-center">
                              <a
                                className="avatar rounded-circle mr-3"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                {/* <img
                                  alt="..."
                                  src={
                                    require("../../assets/img/theme/bootstrap.jpg")
                                      .default
                                  }
                                /> */}
  
                                <i className="ni ni-building" />
                              </a>
                              <Media>
                                <span className="mb-0 text-sm">
                                  <i className="bg-warning" />
                                  {posts.driver_name}
                                </span>
                              </Media>
                            </Media>
                          </td>
                          <td>{posts._id}</td>
                          <td>
                            <span color="" className="badge-dot mr-4">
                              {/* <i className="bg-warning" /> */}
                              {posts.vehicle_type}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">{posts.vehicle_name}</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">{posts.vehicle_no}</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center badge-dot mr-4">
                              <span className="mr-2">
                                <i className="bg-warning" />
                                {posts.distance}
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">{posts.driver_con_no}</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">{posts.driver_description}</span>
                            </div>
                          </td>
                          <td className="text-right">
                            <UncontrolledDropdown>
                              <DropdownToggle
                                className="btn-icon-only text-light"
                                href="#pablo"
                                role="button"
                                size="sm"
                                color=""
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fas fa-ellipsis-v" />
                              </DropdownToggle>
                              <DropdownMenu className="dropdown-menu-arrow" right>
                                {/* <Link to={`/admin/Update_Sponsor/${posts._id}`}> */}
                                  <DropdownItem
                                    // onClick={(e) => e.preventDefault()}
                                    type="submit"
                                  >
                                    Edit Reservation Details
                                  </DropdownItem>
                                {/* </Link> */}
                                <DropdownItem
                                  onClick = {function(event){toggleModal("exampleModel"); setDeleteID(posts._id)}}
                                >
                                  To Cancle
                                </DropdownItem>
  
                                <Modal
                                  className="modal-dialog-centered"
                                  isOpen={exampleModal}
                                  toggle={() => toggleModal("exampleModal")}
                                >
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      Confirmation to Cancle Reservation
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
                                    Do you want to Cancle Reservation?
                                  </div>
                                  <div className="modal-footer">
                                    <Button
                                      color="secondary"
                                      data-dismiss="modal"
                                      type="button"
                                      onClick={() => toggleModal("exampleModal")}
                                    >
                                      Close
                                    </Button>
                                    <Button
                                      color="primary"
                                      type="button"
                                      onClick={() => deleteCustomer()}
                                    >
                                      Confirm Remove
                                    </Button>
                                  </div>
                                </Modal>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default MyTaxiReservations;
  