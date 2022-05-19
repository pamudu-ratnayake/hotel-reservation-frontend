import axios from "axios";
import OTPgenerator from "./OTPgenerator";

const SMShelper = () => {
    const id = "94773151041";
    const pw = "7862";
    const to = "94766501941";
    const otp = OTPgenerator();
    const text = encodeURI("Please enter your OTP. This is your OTP No: "+ otp);
    axios
    .post(`https://www.textit.biz/sendmsg?id=${id}&pw=${pw}&to=${to}&text=${text}`)
}

export default SMShelper;