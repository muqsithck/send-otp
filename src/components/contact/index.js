import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import contacts from "../data/contacts.json";
import { sentOtpFunction, setHistory } from "../../Redux/actions/action";


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(senOtpFunction())
  }, [dispatch]);

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
    dispatch(setHistory(data));
     


  };

  
  console.log("history", globalSate.history)

  return (
    <div>
      {globalSate ? (
        <Grid container>
          <ul>
            {contacts.map( (item, index) => {
              return (
                <li key={index}>
                  {item.sureName} : {item.number}
                  <button
                    onClick={() => {
                      sendOtp(item);
                    }}
                  >
                    Send Otp
                  </button>
                </li>
              );
            })}
          </ul>
        </Grid>
      ) : (
        <div>loding</div>
      )}
    </div>
  );
}
