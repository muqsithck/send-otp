import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Back from "@material-ui/icons/ArrowBackIos";
import Textsms from "@material-ui/icons/Email";
import User from "@material-ui/icons/Person";
import Modal from './modal'

import "./style.css";

export default function UserInfo(props) {
  const globalSate = useSelector(({ contact }) => contact);
  let userInfo = globalSate.currentContact

  const [messageActive, setMessageActive] = useState(false)
  const [open, setOpen] = useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const sendMessage = () => {
    setOpen(false);
    props.sendOtp(userInfo)
  }


  return (
    <Grid container>
      {userInfo ? (
        <Grid item sm={12}>
          <Grid
            item
            md={12}
            xs={12}
            className="full-width-button"
            onClick={props.userInactiveHandler}
          >
            <Back /> Back 
          </Grid>
          <Grid container>
            <Grid item sm={12} className="item-flex-center user-info-wrapper">
              <img
                src={userInfo.image}
                style={{
                  objectFit: "cover"
                }}
                width="100%"
                alt="photo"
              />
            </Grid>

            {
                messageActive ?
            <Grid
              item
              md={12}
              xs={12}
              className="full-width-button"
              style={{ justifyContent: "center" }}
              // onClick={ () => { props.sendOtp(userInfo) }}
              onClick={ () => {setMessageActive(false) }}
            >
              

             
               
              <User style={{marginRight:'5px'}} />
               User Info
            </Grid>
            :
            <Grid
              item
              md={12}
              xs={12}
              className="full-width-button"
              style={{ justifyContent: "center" }}
              onClick={ () => {setMessageActive(true) }}
            >
              
               
              <Textsms style={{marginRight:'5px'}} />
               Send Message
            </Grid>
}

         
            { 
            messageActive ?
            <Grid
            item
            md={12}
            xs={12}
            className="flex-item-center user-info-wrapper"
          >
            <div>
            <input  className="input-box"
            placeholder="Type your message here..."
            /> <button 
             onClick={handleClickOpen} 
             className="primary-button"
            >Send</button>
            </div>
          </Grid>

            :

            <React.Fragment>
            <Grid
              item
              md={12}
              xs={12}
              className="contact-name-wrapper user-info-wrapper"
            >
              <p className="contact-number">
                
                <span style={{ opacity: ".7", fontSize: "12px" }}>Name </span>
                <br />
                {userInfo.firstName}
                {userInfo.sureName}
              </p>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              className="contact-number-wrapper user-info-wrapper"
            >
              <p className="contact-number">
                <span style={{ opacity: ".7", fontSize: "12px" }}>
                  Mobile Number
                </span>
                <br />
                {userInfo.number}
              </p>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              className="contact-number-wrapper user-info-wrapper"
            >
              <p className="contact-number">
                <span style={{ opacity: ".7", fontSize: "12px" }}>Home</span>
                <br />
                {userInfo.home}
              </p>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              className="contact-number-wrapper user-info-wrapper"
            >
              <p className="contact-number">
                <span style={{ opacity: ".7", fontSize: "12px" }}>
                  Location
                </span>
                <br />
                {globalSate.currentContact.location}
              </p>
            </Grid>
            </React.Fragment>

}                        



          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          md={12}
          xs={12}
          className="item-flex-center user-info-wrapper"
        >
          <p>Loading....</p>
        </Grid>
      )}

       <Modal open={open} handleClose={handleClose} sendMessage={sendMessage} />

    </Grid>
  );
}
