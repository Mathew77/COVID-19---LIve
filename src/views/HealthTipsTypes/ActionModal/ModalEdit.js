import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import {
    Card,
    CardContent,
    CardActions,
    Divider,
    Grid,
    TextField
  } from '@material-ui/core';

import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { updateHealthTipsType } from './../../../actions/healthtips'
import { useHistory } from "react-router-dom"; 

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  
});

const useStyles = makeStyles(theme => ({
    root: {},
    row: {
      height: '42px',
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(1)
    },
    spacer: {
      flexGrow: 1
    },
    
    input: {
        display: 'none',
      },
  }));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


 const  AddHealthType = (props) => {
     
  const typename= props.tips ? props.tips : {} ;
  const typeid= props.tips ? props.tips.id : null ;
  let history = useHistory(); 
  const classes = useStyles();
  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState({typename});
  console.log(values)
  const edithealthtype = e => {
    e.preventDefault()
    console.log(values)
    const onSuccess = () => {
        setLoading(false);
        history.push("/healthtips");
        props.handleClose() 
      }
      const onError = () => {
        setLoading(false); 
        props.handleClose()       
      }
      props.updateHealthTipsType(values, typeid, onSuccess,onError)
  }


  return (
    <div>
     
      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}
            fullWidth='false'
            maxWidth='sm'
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          Edit Health Tips Type 
        </DialogTitle>
        <DialogContent dividers>
        <Card>
            <form
                autoComplete="off"
                noValidate
                onSubmit={edithealthtype}
            >
               
                <CardContent>

                <Grid
                    container
                    spacing={3}
                >
                   
                    <Grid
                    item
                    md={12}
                    xs={12}
                    >
                    
                     <TextField
                        fullWidth                       
                        id="name"
                        className={classes.textField}
                        defaultValue={props.tips.name}
                        
                        onChange={e =>
                            setValues({
                              ...values,
                              name: e.target.value
                            })
                          }
                        variant="outlined"
                       
                    />
                    
                    </Grid>
                   
                 
                </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                {loading ? <Spinner /> : ""}

                    <Button
                        color="primary"
                        variant="contained"
                        type='submit'
                    >
                        Update
                    </Button>
                 
                </CardActions>
            </form>
         </Card>
        </DialogContent>

      </Dialog>
    </div>
  );
}


export default connect(null, { updateHealthTipsType })(AddHealthType);


