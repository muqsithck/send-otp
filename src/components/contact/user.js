/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Back from '@material-ui/icons/ArrowBackIos';

import "./style.css";

export default function User(props) {
  const globalSate = useSelector(({ contact }) => contact);
  console.log(globalSate.currentContact);
  return (
    <Grid container >
      {globalSate.currentContact ? (
        <Grid item sm={12} >
              <Grid item md={12} xs={12} className="full-width-button" 
              onClick={props.userInactiveHandler}
              >
             <Back /> Back            </Grid>
          <Grid container >
            <Grid item sm={12} className="item-flex-center user-info-wrapper" >
              <img
                src={globalSate.currentContact.image}
                style={{
                  objectFit: "cover",
              
                }}
                width="100%"
                alt="photo"
              />
            </Grid>
            <Grid item md={12} xs={12} className="contact-name-wrapper user-info-wrapper"  >
              <p className="contact-name"> <span style={{opacity:'.7'}} >Name </span> {globalSate.currentContact.firstName} {globalSate.currentContact.sureName}</p>
            </Grid>
            <Grid item md={12} xs={12} className="contact-number-wrapper user-info-wrapper" >
              <p className="contact-number"> <span style={{opacity:'.7'}} >Number</span> {globalSate.currentContact.number}</p>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid item md={12} xs={12} className="item-flex-center user-info-wrapper" >
        <p>Loading....</p>
        </Grid>
      )}
    </Grid>
  );
}
