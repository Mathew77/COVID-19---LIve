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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import {createHealthType} from './../../actions/healthtips'
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
  
  let history = useHistory(); 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({name:""});

  const savehealthtype = e => {
    e.preventDefault()
    console.log(values)
    const onSuccess = () => {
        setLoading(false);
        history.push("/healthtips");
        handleClose() 


      }
      const onError = () => {
        setLoading(false); 
        handleClose()       
      }
      props.createHealthType(values, onSuccess,onError)
  }


  return (
    <div>
    <ToastContainer autoClose={3000} hideProgressBar />
      <div className={classes.row}>
      <span className={classes.spacer} />
      <Button
          color="primary"
          variant="contained"
          onClick={handleClickOpen}
        >
         Add Tips Type
        </Button>
        
      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
            fullWidth='false'
            maxWidth='sm'
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Health Tips Type
        </DialogTitle>
        <DialogContent dividers>
        <Card>
            <form
                autoComplete="off"
                noValidate
                onSubmit={savehealthtype}
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
                        label="Health Type"
                        id="name"
                        className={classes.textField}
                        helperText="Health Type"
                        onChange={e =>
                            setValues({
                              ...values,
                              name: e.target.value
                            })
                          }
                        variant="outlined"
                        type="text"
                       
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
                        Save
                    </Button>
                 
                </CardActions>
            </form>
         </Card>
        </DialogContent>

      </Dialog>
    </div>
  );
}


export default connect(null, { createHealthType })(AddHealthType);


