import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {

      
     



  return (
    <div>
    
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"warring"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Here i use 2Factro sms service(https://2factor.in) ,
          In 2factor sms server, Text messaging feature is supported over paid accounts only. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.sendMessage} color="primary" autoFocus>
            Send OTP 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
