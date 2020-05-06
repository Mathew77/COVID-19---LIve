import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HealthTipsListTable  from './HealthTipsListTable';
import AddHealthTips from './AddHealthTips'


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
       <AddHealthTips />   
      <div className={classes.content}>
        <HealthTipsListTable  />
      </div>
    </div>
  );
};

export default HealthTipsList;
