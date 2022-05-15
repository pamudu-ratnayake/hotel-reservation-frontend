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
  import StripeCheckout from 'react-stripe-checkout';
  import { useState } from 'react';
  import { toast } from 'react-toastify';

  import axios from 'axios';
  
  const Payment = () => {

    // product object name, price
    const [product] = useState({
        name: "Sample Mario Game",
        price: 1000,
        description: "This is a sample mario game"
    })

    async function handleToken(token, addresses){
      const response = await axios.post('http://localhost:8080/checkout', {token, product});

      let error, status
    // take response
      console.log(response.status);

      if(response.status === 200){
        toast("Success Payment is completed", {type: 'success'})
      }else{
        toast("Failure payment is not completed", {type: "error"})
      }

    }

    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" >
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>

              <h2>Product Info</h2>
                <h3>Product Name: {product.name}</h3>
                <h3>Product Price: {product.price}</h3>
                <h3>Product Description: {product.description}</h3>
                  <StripeCheckout
                  stripeKey="pk_test_51KytMtB5lTO708JQIR9XitBlh5MbCOsVeBK8UydzmX8KwWaFdvpNbs8tZPl4MC8IDvyQMn1QBrCm3I1HwPVQywGe00P99c9BQQ"
                  token={handleToken}
                  amount={product.price*100}
                  name={product.name}
                  billingAddress
                  shippingAddress
                  /> 
              </CardBody>
            </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Payment;
  