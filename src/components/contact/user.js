import React from "react";
import { useSelector } from "react-redux";
import {Grid} from "@material-ui/core"
import './style.css'

export default function Index() {
  const globalSate = useSelector(({ contact }) => contact);
  console.log(globalSate.currentContact)
  return (
    <Grid>
       { 
       globalSate.currentContact ? 
       <div>
      <p>firstname: {globalSate.currentContact.firstName}</p>
      <p>
      name: {globalSate.currentContact.sureName}</p>
      <p>number: {globalSate.currentContact.number}</p>
      </div>
      :
      <p>looding</p>
}
    </Grid>
  );
}
