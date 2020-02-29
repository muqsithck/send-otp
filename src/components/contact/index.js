import React from 'react'
import {Grid} from '@material-ui/core'
import contacts from '../data/contacts.json'
import axios from 'axios'


export default function App()

 {
      
    const sendOtp = (n) => {
        let otp="889966"
        axios.get(`https://2factor.in/API/V1/ec15425d-5b0f-11ea-9fa5-0200cd936042/SMS/${n}/${otp}`).then( 
            res => {
                console.log("res:" , res)
            }
        )
          
    }
      

    return(
    <Grid container>
       <ul>
       {contacts.map( item => {
           return(
               <li>{item.sureName} : {item.number} <button 
               onClick={() => {sendOtp(item.number)}}
               > Send Otp </button> </li>
           )
       }   )
       }
   </ul>
    </Grid>
  )
}
