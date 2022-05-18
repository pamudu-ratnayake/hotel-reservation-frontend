import { Button, Alert } from "reactstrap";
import React, { useState } from "react"
import "payhere-embed-sdk/dist/react.css"
import Payhere from "payhere-embed-sdk/dist/react"

const SubscriptionPage = () => {
  const [success, setSuccess] = useState(false)
  const [showPayhere, setShowPayhere] = useState(false)

  return (
    <div id="payhere-modal">
    <div>
      <Button
        onClick={() => setShowPayhere(true)}
      >
        Continue to payment
      </Button>

      <Payhere
        selector="#payhere-modal"
        embedURL={"https://app.payhere.co/altlabs/coffee"}
        open={showPayhere}
        onSuccess={data => {
          console.log("Payhere success", data)
          setSuccess(true)
        }}
        onFailure={err => {
          console.log("Payhere failed", err)
          setSuccess(true)
        }}
        onClose={() => {
          setShowPayhere(false)
          if (success) {
            console.log("Payment success")
            alert("Payhere success")
          } else {
            console.log("Payment failed")
            alert("Payment failed")
          }
        }}
      />
    </div>
    </div>
  )
}


export default SubscriptionPage;