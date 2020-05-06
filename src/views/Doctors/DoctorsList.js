import React from 'react';
import { makeStyles } from '@material-ui/styles';

import DoctorsListTable  from './DoctorsListTable';
import AddDoctor from './AddDoctor';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Doctors = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AddDoctor />
      <div className={classes.content}>
        <DoctorsListTable  />
      </div>
    </div>
  );
};

export default Doctors;
