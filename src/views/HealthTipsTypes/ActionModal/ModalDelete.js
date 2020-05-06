import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { deleteHealthTipsType } from './../../../actions/healthtips';
import { useHistory } from "react-router-dom";


export default function AlertDialog(props) {
    let history = useHistory();
const dispatch = useDispatch()
const  msg = () => {       
       props.handleClose()
       history.push("/healthtipstype");      
    } 

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this Health Tips?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.tips.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{
              dispatch(deleteHealthTipsType(props.tips.id, msg))
              
              }} color="secondary">
            Yes
          </Button>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
