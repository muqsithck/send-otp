import React from 'react'
import {Grid} from '@material-ui/core'
import Tab from './components/tab'
import { Provider } from "react-redux";
import store from "./Redux/store";
import './App.css'


export default function App()
 {
    return(
  <Provider store={store}>
    <Grid container style={{ display:'flex', justifyContent:"center" }}  >
      <Tab />
    </Grid>
  </Provider>
  )
}
