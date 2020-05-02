import React from 'react';
import { makeStyles } from '@material-ui/styles';

import QuestionsListTable  from './QuestionsListTable';
import QuestionsToolBar from './QuestionsToolBar';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Questions = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <QuestionsToolBar />
      <div className={classes.content}>
        <QuestionsListTable  />
      </div>
    </div>
  );
};

export default Questions;
