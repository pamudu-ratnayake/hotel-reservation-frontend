const SendEmail = (e, values) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d7p8spa", "template_2hz5hnb", e.target, "user_fPD13QAVpGNDHZOSiKSLb")
      .then((res) => {
        console.log(res);
        alert("Email Sent");
      })
      .catch((err) => console.log(err));
  };

  export default SendEmail;