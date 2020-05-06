import React, {useState, useEffect} from 'react';
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
  import axios from 'axios';
  import {url} from './../../api'


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


export default function AddFacility(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        url+'countries',
      );
      setData(result.data);
    };
 
    fetchData();
  });
 

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const [values, setValues] = useState({});

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };



  return (
    <div>

      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          onClick={handleClickOpen}
        >
          Add Doctor
        </Button>
      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
            fullWidth='false'
            maxWidth='sm'
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Add Doctor
        </DialogTitle>
        <DialogContent dividers>
        <Card>
            <form
                autoComplete="off"
                noValidate
            >
               
                <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                <TextField
                    fullWidth
                    helperText="First name"
                    label="First Name"
                    margin="dense"
                    name="firstname"
                    onChange={handleChange}
                    required
                    value={values.firstname}
                    variant="outlined"
                />
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                <TextField
                    fullWidth
                    helperText="Last Name"
                    label="Last name"
                    margin="dense"
                    name="lastname"
                    onChange={handleChange}
                    required
                    value={values.lastname}
                    variant="outlined"
                />
                </Grid>
                <Grid
                item
                md={6}
                xs={12}
                >
                <TextField
                    fullWidth
                    label="Select Country"
                    margin="dense"
                    name="country"
                    onChange={handleChange}
                    required
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant="outlined"
                >
                    <option ></option>
                    {data.map(option => (
                    <option
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                    ))}
                </TextField>
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                <TextField
                    fullWidth
                    helperText="Please enter contact phone number"
                    label="Contact Number"
                    margin="dense"
                    name="contact"
                    onChange={handleChange}
                    required
                    value={values.contact}
                    variant="outlined"
                />
                </Grid>
                <Grid
                item
                md={6}
                xs={12}
                >
                <TextField
                    fullWidth
                    label="Address"
                    helperText="Optional"
                    margin="dense"
                    name="address"
                    onChange={handleChange}
                    required
                    value={values.address}
                    variant="outlined"
                />
                </Grid>
                <Grid
                item
                md={6}
                xs={12}
                >
                <TextField
                    fullWidth
                    label="Email Address"
                    helperText="optional"
                    margin="dense"
                    name="email"
                    onChange={handleChange}
                    required
                    value={values.email}
                    variant="outlined"
                />
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                <TextField
                    fullWidth
                    helperText="Skype ID"
                    label="Skype ID"
                    margin="dense"
                    name="skpy"
                    onChange={handleChange}
                    required
                    value={values.lastname}
                    variant="outlined"
                />
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                <TextField
                    fullWidth
                    helperText="WhatsApp"
                    label="WhatsApp"
                    margin="dense"
                    name="whatsapp"
                    onChange={handleChange}
                    required
                    value={values.whatsapp}
                    variant="outlined"
                />
                </Grid>
                </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
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