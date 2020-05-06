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
import {url} from './../../../api'
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { updateHealthTips } from './../../../actions/healthtips'

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


const AddHealthTips = (props) =>{
  const classes = useStyles();
  const [values, setValues] = useState({ "title": "",
                                        "content": "",
                                        "imagepath": "",
                                        "healthtiptype":1,
                                        "language": 1
                                        });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        url+'healthtiptypes',
      );
      setData(result.data);
    };
 
    fetchData();
  }, []);
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const savehealthtip = e => {
    e.preventDefault()
    const onSuccess = () => {
        setLoading(false);
        props.handleClose()       
      }
      const onError = () => {
        setLoading(false); 
        props.handleClose()       
      }
      props.tips.title = values.title !== props.tips.title ? values.title : props.tips.title ;
      props.tips.content = values.content !== props.tips.content ? values.title : props.tips.content ;
      props.tips.healthtiptype = values.healthtiptype !== props.tips.healthtiptype ? values.healthtiptype : props.tips.healthtiptype ;
      props.tips.imagepath = values.imagepath !== props.tips.imagepath ? values.imagepath :props.tips.imagepath ;
      props.tips.language = values.language !== props.tips.language ? values.language :props.tips.language ;
      props.updateHealthTips(props.tips,props.tips.id, onSuccess,onError)
  }



  return (
    <div>

      <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}
            fullWidth='false'
            maxWidth='sm'
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          Update Health Tips
        </DialogTitle>
        <DialogContent dividers>
        <Card>
            <form
                autoComplete="off"
                noValidate
                onSubmit={savehealthtip}
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
                    
                        label="Title"
                        margin="dense"
                        name="title"
                        onChange={handleChange}
                        required
                        defaultValue={props.tips.title}
                        variant="outlined"
                    />
                     
                    </Grid>
                    <Grid
                    item
                    md={12}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        label="Select Type"
                        margin="dense"
                        name="healthtiptype"
                        onChange={handleChange}
                        required
                        select
                       
                        SelectProps={{ native: true }}
                        defaultValue={props.tips.healthtiptype}
                        variant="outlined"
                    >
                        <option > </option>
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
                    md={12}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        helperText="Please enter the health tips here "
                        margin="dense"
                        name="content"
                        onChange={handleChange}
                        required
                        id="filled-textarea"
                        label="Health Tip Content "
                        placeholder="Please enter content here "
                        multiline
                        variant="filled"
                        defaultValue={props.tips.content}
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                     <input
                            accept="image/*"
                            className={classes.input}
                            id="imagepath"
                            multiple
                            type="file"
                            onChange={handleChange}
                            defaultValue={props.tips.imagepath}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="default" component="span">
                                Upload image
                            </Button>
                        </label>
                    </Grid>
                 
                </Grid>
                </CardContent>
                <Divider />
                <CardActions>
                {loading ? <Spinner /> : ""} <br/>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
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

export default connect(null, { updateHealthTips })(AddHealthTips);