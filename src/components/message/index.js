import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { sentOtpFunction, setHistory } from "../../Redux/actions/action";

export default function Message() {
  const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState({
    mobile: "",
    otp: ""
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const sendMessage = () => {
    let number = inputFields.mobile;
    dispatch(sentOtpFunction(number));
    let randomNumber = Math.floor(Math.random() * 1111); 
    var data =  {
     "id":randomNumber,
     "firstName" : "Unknown",
     "sureName" : "Unknown",
     "number" : inputFields.mobile,
     "image":"images/sachin@2x.png",
     "home":"Unknown",
     "location":"Unknown"
    }
    var dateWithouthSecond = new Date();
    var date = dateWithouthSecond.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    });

    var fullData = { ...data, time: date };

       dispatch(setHistory(fullData));
  };

  console.log(inputFields);

  return (
    <Grid item md={12} xs={12} className="text-message-wrapper">
      <div>
        <input
          className="input-box"
          placeholder="Enter Mobile Number "
          onChange={e => handleInputChange(e)}
          name="mobile"
          value={inputFields.mobile}
        />
        <input
          className="input-box"
          placeholder="Enter a Six Digit OTP"
          onChange={e => handleInputChange(e)}
          name="otp"
          value={inputFields.otp}
        />
        <button onClick={sendMessage} className="primary-button">
          Send
        </button>
      </div>
    </Grid>
  );
}
