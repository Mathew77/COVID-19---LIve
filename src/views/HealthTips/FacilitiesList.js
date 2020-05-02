import React from 'react';
import { makeStyles } from '@material-ui/styles';

import FacilitiesListTable  from './FacilitiesListTable';
import FacilitiesToolBar from './FacilitiesToolBar';

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
      <FacilitiesToolBar />
      <div className={classes.content}>
        <FacilitiesListTable  />
      </div>
    </div>
  );
};

export default Facilities;
