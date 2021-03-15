import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const path = require('path');

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
// const dirPath = ;

function Profile() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: 'smokewhite', marginRight: '10px' }}
    >
      <div className="row">
        <div className="col">
          <Avatar src="/avatar.png" alt="Img" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
