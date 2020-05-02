import React from 'react';
import { makeStyles } from '@material-ui/styles';

import UsersListTable  from './UsersListTable';
import UserToolBar from './UserToolBar';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Users = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <UserToolBar />
      <div className={classes.content}>
        <UsersListTable  />
      </div>
    </div>
  );
};

export default Users;
