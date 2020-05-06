import React from 'react';
import { makeStyles } from '@material-ui/styles';

import FacilitiesListTable  from './FacilitiesListTable';
import AddFacility from './AddFacility'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Facilities = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AddFacility />
      <div className={classes.content}>
        <FacilitiesListTable  />
      </div>
    </div>
  );
};

export default Facilities;
