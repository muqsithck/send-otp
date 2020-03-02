import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import contacts from "../data/contacts.json";
import { sentOtpFunction, setHistory, setCurrentContact } from "../../Redux/actions/action";
import "./style.css";
import More from "@material-ui/icons/MoreVert";

import User from './user'

export default function App() {
  const dispatch = useDispatch();

  const globalSate = useSelector(({ contact }) => contact);

  const sendOtp = data => {
    // let otp="889966"
    // axios.get(`https://2factor.in/API/V1/ec15425d-5b0f-11ea-9fa5-0200cd936042/SMS/${n}/${otp}`).then(
    //     res => {
    //         console.log("res:" , res)
    //     }
    // )

    // let otp = Math.floor(100000 + Math.random() * 900000)
    // alert(`OTP for ${n} is ${otp}`)

    // dispatch(sentOtpFunction(n));

    var dateWithouthSecond = new Date();
    var date = dateWithouthSecond.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    });

    var fullData = { ...data, time: date };

    dispatch(setHistory(fullData));
  };

  const userActiveHandler = (data) => {
    dispatch(setCurrentContact(data));
    window.scrollTo(0, 0); 
    document.getElementById("details-wrapper").style.opacity = 1;
    document.getElementById("details-wrapper").style.zIndex = 9999;
    
  };

  const userInactiveHandler = () => {
    window.scrollTo(0, 0); 
    document.getElementById("details-wrapper").style.opacity = 0;
    document.getElementById("details-wrapper").style.zIndex = 1;
  };

  return (
    <Grid container id="scroll">
      {globalSate ? (
        <Grid item md={12}>
          <Grid container>
            {contacts.map((item, index) => {
              return (
                <Grid
                  item
                  md={12}
                  key={index}
                  className="contacts-list-wrapper"
                >
                  <Grid container>
                    <Grid item md={4} xs={12} className="contact-name-wrapper">
                      <p className="contact-name"> {item.sureName} </p>
                    </Grid>
                    <Grid item md={4} xs={6} className="contact-number-wrapper">
                      <p className="contact-number">{item.number} </p>
                    </Grid>
                    <Grid item md={4} xs={6} className="contact-button-wrapper">
                      <button
                        className="primary-button"
                        onClick={() => {
                          sendOtp(item);
                        }}
                      >
                        Send Otp
                      </button>

                      <More className="icon-button"
                      onClick={() => {
                        userActiveHandler(item);
                      }}
                     />
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      ) : (
        <div>Loading</div>
      )}

    
     <div className="contact-details-wrapper" id="details-wrapper">
       <User  userInactiveHandler={userInactiveHandler} /> 
     </div>
    </Grid>
  );
}
