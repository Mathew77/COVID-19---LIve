import React from 'react';
import { makeStyles } from '@material-ui/styles';

import HealthTipsListTable  from './HealthTipsListTable';
import HealthTipsToolBar from './HealthTipsToolBar';

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
      <HealthTipsToolBar />
      <div className={classes.content}>
        <HealthTipsListTable  />
      </div>
    </div>
  );
};

export default Facilities;
