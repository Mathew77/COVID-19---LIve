import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HealthTipsListTable  from './HealthTipsTypeListTable';
import AddHealthType from './AddHealthType'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const HealthTipsList = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
       <AddHealthType />
     
      <div className={classes.content}>
        <HealthTipsListTable  />
      </div>
    </div>
  );
};

export default HealthTipsList;
