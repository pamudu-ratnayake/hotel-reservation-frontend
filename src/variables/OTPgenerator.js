
const OTPgenerator = () => {
    console.log('triggered......');
    //    let generator = "7305192864";
    //    let otp = "";
 
    //    for (let i = 1; i <= 6; i++)
    //    {
    //       otp = generator.substr(Math.random() % (generator.strlen())), 1;
    //    }
 
    //    return otp;

    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
    
}

export default OTPgenerator;
