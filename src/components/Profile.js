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
    <div className={classes.root} style={{ backgroundColor: 'smokewhite' }}>
      <div className="row align-items-end  " style={{ position: 'fixed' }}>
        <div className="col">
          <Avatar
            src={process.env.PUBLIC_URL + '/images/avatar.png'}
            alt="Profile Pic"
            style={{ border: 'solid', borderColor: 'rgba(14, 4, 143)' }}
          />
        </div>
        <div className="col d-none d-md-block" style={{ marginLeft: '3px' }}>
          Manasvin Sharma
        </div>
        <div className="col ">
          <img src="https://img.icons8.com/material/24/000000/expand-arrow--v1.png" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
