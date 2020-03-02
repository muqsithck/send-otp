import React from "react";
import { useSelector } from "react-redux";
import {Grid} from "@material-ui/core"
import './style.css'

export default function Index() {
  const globalSate = useSelector(({ contact }) => contact);
  return (
    <Grid>
      {globalSate.history.length > 0 ? (
          globalSate.history.map((item, index ) => {
            return <Grid item md={12}   className="history-list-wrapper" key={index}>
              <p  className="history-name"> {item.sureName} </p>  
              <p  className="history-time"> {item.time} </p>  
              </Grid>
          })
       
      ) : (
        <div>noting...</div>
      )}
    </Grid>
  );
}
